import express from 'express';
import { getVehicles, patchVehicle, postTest} from '../controllers/vehicleController'

const router = express.Router();

router.get("/", getVehicles);

router.put('/:id2', postTest);

router.patch("/:id", patchVehicle);

export default router;