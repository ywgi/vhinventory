import Vehicle from "../models/vehicleModel"
import { Request, Response } from 'express';

export const getVehicles = async (req: Request , res: Response) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vehicles' });
    }
}


export const postTest = (req: Request, res: Response) => {

}

export const patchVehicle = async (req: Request, res: Response) => {

}

// export const patchVehicle = async (req: Request , res: Response) => {
//     try {
//         const { id } = req.params;
//         const updatedFields = req.body;

//         const updatedVehicle = await Vehicle.findByIdAndUpdate(
//             id,
//             { $set: updatedFields },
//             { new: true }
//         )

//         if (!updatedVehicle) {
//             return res.status(404).json({ message: 'Vehicle not found!'});
//         }

//         return res.json({message: 'All good'});
//     }
//     catch (error) {
//         res.status(500).json({message: error});
//     }
// }