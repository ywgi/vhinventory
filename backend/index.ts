// import * as dotenv from 'dotenv';
// dotenv.config();
// import mongoose from 'mongoose';
// import express from 'express';
// import cors from 'cors';
// //import cron from 'node-cron';
// //model imports
// import Message from './models/messageModel';
// import Vehicle from './models/vehicleModel';
// import User from './models/userModel';
// //util imports
// // import { updateVehicles } from './utils/updateVehicles.js';
// import updateVehicles from './utilities/vehicle/updateVehicles';
import parseCsv from './utilities/extractVehicles';
//import { deleteVehicles } from './utils/deleteVehicles.js';
//route imports
//import vehicleRoutes from './routes/vehicleRoutes';

//database initialization and connection
// const connectionString = process.env.MONGO_URI;
// if (connectionString != undefined) {
//   mongoose.connect(connectionString)
//   .then(() => {
//     updateVehicles();
//     console.log("Mongo connected and db updated.");
//   })
//   .catch(err => console.log(err));
// }

//server initialization
// const app = express();
// const port = 5000;

// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

// app.listen(port, () => {
//     console.log(`node server running on ${port}`);
// })

// app.use(express.json());
// app.use('/api/vehicles', vehicleRoutes);

parseCsv().then(x => 
    console.log(x)
);