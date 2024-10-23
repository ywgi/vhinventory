import express from 'express';
import { getVehicles, patchVehicle } from '../controllers/vehicleController'

const router = express.Router();

router.get("/", getVehicles);

router.patch("/:id", patchVehicle);

export default router;