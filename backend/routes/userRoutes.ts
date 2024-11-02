import express from 'express';
import { getUserProfile } from '../controllers/userController'

const router = express.Router();

router.get("/profile", getUserProfile);

router.patch("/profile/edit")

export default router;