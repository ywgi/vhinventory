type UnfilteredVehicle = {
    vehicle_id: string;
    vin: string;
    title: string;
    description: string;
    url: string;
    make: string;
    model: string;
    year: string;
    'mileage.value': string;
    'milage.unit': string;
    'image[0].url': string;
    'image[1].url'?: string;
    'image[2].url'?: string;
    'image[3].url'?: string;
    'image[4].url'?: string;
    'image[5].url'?: string;
    'image[6].url'?: string;
    'image[7].url'?: string;
    'image[8].url'?: string;
    'image[9].url'?: string;
    'image[10].url'?: string;
    'image[11].url'?: string;
    'image[12].url'?: string;
    'image[13].url'?: string;
    'image[14].url'?: string;
    'image[15].url'?: string;
    'image[16].url'?: string;
    'image[17].url'?: string;
    'image[18].url'?: string;
    'image[19].url'?: string;
    transmission: string;
    fuel_type: string;
    body_style: string;
    drivetrain: string;
    state_of_vehicle: string;
    sale_price?: string;
    availability: string;
    address: string;
    stock_number: string;
    price: string;
    exterior_color: string;
    latitute: string;
    longitute: string;
    days_on_lot: string;
    msrp?: string;
    chrome_id: string;
    fb_page_id?: string;
} & Record<string,string>;

export default UnfilteredVehicle;