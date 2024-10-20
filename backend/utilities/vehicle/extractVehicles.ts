


// const extractVehicles = async () => {
//     const payload = await fetch("https://vendordownloads.homenetinc.com/VerHoefChevroletBuick/VerHoefChevroletBuick.csv");
//     const csvData = await payload.text();
    
//     const parseCsv = (csv: string) => {
//       const cars = [];
//       const usefulKeys = [
//         "vin",
//         "title",
//         "url",
//         "make",
//         "model",
//         "year",
//         "mileage.value",
//         "mileage.unit",
//         "image",
//         "transmission",
//         "fuel_type",
//         "body_style",
//         "drivetrain",
//         "state_of_vehicle",
//         "stock_number",
//         "exterior_color",
//         "days_on_lot",
//         "msrp",
//         "price"
//       ];
  
//       const [headerLine, ...lines] = csv.trim().split('\n');
//       const headers = headerLine.replaceAll('"', '').split(",");
//       const carRows = [];
//       for (const carRow of lines) {
//         const cleanedCarRow = carRow
//           .replace('"', '')
//           .replace('"\r', '')
//           .split('","');
//         carRows.push(cleanedCarRow);
//       }
  
//       for (let row = 0; row < carRows.length; row++) {
//         const car = { images: [] };
//         for (let i = 0; i < headers.length; i++) {
//           const header = headers[i].toLowerCase();
//           if (header.includes("image")) {
//             car.images.push(carRows[row][i]);
//             continue;
//           }
//           if (usefulKeys.includes(header)) {
//             car[header] = carRows[row][i];
//           }
//         }
//         cars.push(car);
//       }
  
//       return cars;
//     }
  
//     const parsedData = parseCsv(csvData);
    
//     return parsedData;
// };

// export default extractVehicles;