import { Schema, model, connect } from 'mongoose';
import Vehicle from '../types/VehicleType';
import Note from '../types/NoteType'

interface IVehicle extends Vehicle {
    notes: Note[];
    
}