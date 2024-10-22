import { Schema, model } from "mongoose";

interface message {
    user: string;
    message: string;
    timestamp: string;
}

const messageSchema = new Schema<message>({
    user: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
        default: `${Date.now}`,
    }
});

const messageModel = model<message>('Message', messageSchema);

export default messageModel;