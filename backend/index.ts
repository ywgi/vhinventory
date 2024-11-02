import * as dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config({ path: resolve(__dirname, '../.env') });
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
//import cron from 'node-cron';
//util imports
import updateVehicles from './utilities/updateVehicles';
//route imports
import bugRoutes from './routes/bugRoutes'
import chatRoutes from './routes/chatRoutes';
import userRoutes from './routes/userRoutes'
import vehicleRoutes from './routes/vehicleRoutes';

//database initialization and connection
const connectionString = process.env.MONGO_URI;

if (connectionString != undefined) {
  mongoose.connect(connectionString)
  .then(() => {
    updateVehicles();
    console.log("Mongo connected and db updated.");
  })
  .catch(err => console.log(err));
}
else {
    console.log("conneciton string was undefined!");
}

//server initialization
const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.listen(port, () => {
    console.log(`node server running on ${port}`);
})

app.use(express.json());
app.use('/bugs', bugRoutes);
app.use('/chat', chatRoutes)
app.use('/vehicles', vehicleRoutes);
app.use('/user', userRoutes);

