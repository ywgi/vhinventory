import { Schema, model, connect } from 'mongoose';
import Vehicle from '../types/vehicleType';

interface IVehicle extends Vehicle {
    notes: String[];
    lof: Boolean;
    detail: Boolean;
    ucc: Boolean;
}

const vehicleSchema = new Schema<IVehicle>({
    vin: { type: String, required: true },
    title: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    mileage: { type: String, required: true },
    transmission: { type: String },
    fuelType: { type: String, required: true },
    bodyStyle: { type: String },
    drivetrain: { type: String },
    stateOfVehicle: { type: String, required: true },
    stockNumber: { type: String, required: true },
    price: { type: String },
    exteriorColor: { type: String, required: true },
    daysOnLot: { type: String, required: true },
    msrp: { type: String },
    images: { type: [String], required: true },
    notes: { type: [String], required: true, default: []},
    lof: { type: Boolean, default: false },
    detail: { type: Boolean, default: false },
    ucc: { type: Boolean, default: false }
})

const vehicleModel = model<IVehicle>('Vehicle', vehicleSchema); 

export default vehicleModel;