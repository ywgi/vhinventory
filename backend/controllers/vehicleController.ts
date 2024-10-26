import Vehicle from "../models/vehicleModel"
import { Request, Response } from 'express';

export const getVehicles = async (req: Request , res: Response) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vehicles' });
    }
}

export const patchVehicle = async (req: Request, res: Response) => {
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
        res.status(500).json({message: "Server failed!"});
    }
}
