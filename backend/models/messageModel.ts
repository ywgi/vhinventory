import { Schema, model, Types } from "mongoose";

interface message {
    user: Types.ObjectId;
    message: string;
    timestamp: string;
    isDeleted: boolean;
}

const messageSchema = new Schema<message>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
        default: () => new Date().toISOString(),
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const messageModel = model<message>('Message', messageSchema);

export default messageModel;