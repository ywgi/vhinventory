import express from 'express';
import { getVehicles, updateVehicle, sellVehicle} from '../controllers/vehicleController'

const router = express.Router();

router.get("/", getVehicles);

router.patch("/:id", updateVehicle);

router.patch('/sell/:id', sellVehicle);

export default router;