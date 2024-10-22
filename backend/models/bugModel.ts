import { Schema, model } from "mongoose";

interface IBug {
    user: string;
    priority: Boolean;
    text: string;
    timestamp: string;
}

const bugSchema = new Schema<IBug>({
    user: {
        type: String,
        required: true,
    },
    priority: {
        type: Boolean,
        required: true,
        default: false,
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    }
});

const bugModel = model<IBug>('Bug', bugSchema);

export default bugModel;