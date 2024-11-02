import express from 'express';
import { getGroupChat, sendMessage, editMessage, deleteMessage } from '../controllers/chatController'

const router = express.Router();

router.get("/", getGroupChat);

router.put("/send", sendMessage)

router.put("/:id", editMessage);

router.delete('/sell/:id', deleteMessage);


export default router;