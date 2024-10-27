import express from 'express';
import { getUserProfile, updateVehicle, sellVehicle} from '../controllers/userController'

const router = express.Router();

router.get("/profile", getUserProfile);

router.patch("/:id", updateVehicle);

router.patch('/sell/:id', sellVehicle);

export default router;