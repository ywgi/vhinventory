import Vehicle from '../models/vehicleModel';

const deleteCollection = async () => {
  await Vehicle.collection.drop();
  console.log('Vehicles collection dropped');
}

export default deleteCollection;