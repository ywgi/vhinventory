import Vehicle from '../models/vehicleModel';
import { Request, Response } from 'express';
import { errorResponse } from '../utilities/errorResponse';

export const getVehicles = async (req: Request , res: Response) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse);
    }
}

export const updateVehicle = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedFields = req.body;

    try{
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id,
            { $set: updatedFields },
            { new: true }
        )
    
        if (!updatedVehicle) {
            res.status(404).json({message: "Vehicle not found!"});
        }
        else {
            res.status(200).json(updatedVehicle);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse);
    }
}

export const sellVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const soldVehicle = await Vehicle.findByIdAndUpdate(
            id,
            { $set: { isSold: true } },
            { new: true }
        );
        if (!soldVehicle) {
            res.status(404).json({
               success: false,
               message: "Vehicle not found!",
               error: `No vehicle exists with id: ${id}.` 
            });
        }
        else {
            res.status(200).json(soldVehicle);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse);
    }
}
