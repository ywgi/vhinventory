import User from '../models/userModel';
import { Request, Response } from 'express';
import { errorResponse } from '../utilities/errorResponse';

export const getUserProfile = async(req: Request, res : Response) => {
    try  {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            res.status(400).json(user);
        }
    } catch (error) {
        res.status(500).json()
    }
}