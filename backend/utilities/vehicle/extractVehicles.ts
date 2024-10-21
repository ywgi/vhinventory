import Papa = require('papaparse');
import axios = require('axios');
//
import Vehicle from '../../types/VehicleType';
import UnfilteredVehicle from '../../types/UnfilteredVehicleType'


const url = "https://vendordownloads.homenetinc.com/VerHoefChevroletBuick/VerHoefChevroletBuick.csv";

const fetchCsv = async () : Promise<string> => {
    const response = await axios.get(url, {
        responseType: 'text' 
    });  
    return response.data as string;  
};

const vehicleConverter = (unfilteredVehicles : UnfilteredVehicle[]) : Vehicle[] => {
    const vehicles = unfilteredVehicles.map(uv => {
        return {
            vin: uv.vin,
            title: uv.title,
            make: uv.make,
            model: uv.model,
            year: uv.year,
            mileage: uv['mileage.value'],
            transmission: uv.transmission,
            fuelType: uv.fuel_type,
            bodyStyle: uv.body_style,
            drivetrain: uv.drivetrain,
            stateOfVehicle: uv.state_of_vehicle,
            stockNumber: uv.stock_number,
            price: uv.price,
            exteriorColor: uv.exterior_color,
            daysOnLot: uv.days_on_lot,
            msrp: uv.msrp,
            images: Object.keys(uv)
                .filter(key => /^image\[\d+\]\.url$/.test(key))
                .map(key => uv[key])
        } as Vehicle;
    })
    return vehicles;
}

const parseCsv = async () : Promise<Vehicle[]> => {
    const csvData = await fetchCsv();
    const results = Papa.parse<UnfilteredVehicle>(csvData, {
        header: true,
        transformHeader: header => header.toLowerCase(),
    });

    return vehicleConverter(results.data);
};


parseCsv().then(parsedVehicleData => {
    console.log(parsedVehicleData[0]);
}).catch(err => {
    console.error(err);
});

export default parseCsv;