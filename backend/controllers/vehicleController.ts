import Vehicle from "../models/vehicleModel"
import express, { Request, Response } from 'express';

export const getVehicles = async (req: Request , res: Response) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vehicles' });
    }
}

export const updateVehicle = async (req: Request , res: Response) => {
    console.log('update vehicles.')
}