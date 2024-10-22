import Vehicle from '../models/vehicleModel';
import extractVehicles from './extractVehicles';

const updateVehicles = async () => {
    const vehiclesArray = await extractVehicles();
    try{
        await Vehicle.insertMany(vehiclesArray, { ordered: false });
        console.log('All vehicles saved!');
    }
    catch (error) {
        console.error('Error saving vehicles: ', error);
    }
}

export default updateVehicles;