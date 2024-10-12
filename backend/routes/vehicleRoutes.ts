import express from 'express';
import { getVehicles } from '../controllers/vehicleController'

const router = express.Router();

router.get("/", getVehicles);

export default router;