import { Schema, model } from 'mongoose';

const vehicleSchema = new Schema({
    vin: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    "mileage.value": {
        type: String,
    },
    "mileage.unit": {
        type: String,
        default: 'miles',
    },
    images: {
        type: [String],
    },
    transmission: {
        type: String,
    },
    fuel_type: {
        type: String,
        required: true,
    },
    body_style: {
        type: String,
    },
    drivetrain: {
        type: String,
    },
    state_of_vehicle: {
        type: String,
        required: true,
    },
    stock_number: {
        type: String,
        required: true,
    },
    exterior_color: {
        type: String,
        required: true,
    },
    days_on_lot: {
        type: String,
        required: true,
    },
    msrp: {
        type: String,
    },
    price: {
        type: String,
    },
    notes: {
        type: [String],
    },
    lof: {
        type: Boolean,
        default: false,
    },
    detail: {
        type: Boolean,
        default: false,
    },
    ucc: {
        type: Boolean,
        default: false,
    }
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
