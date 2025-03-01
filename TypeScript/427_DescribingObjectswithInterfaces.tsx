///////////////////////////
// 427. Describing Objects with Interfaces

interface Car {
    year: number;
    make: string;
    model: string;
}

// function formatCar(car: {year: number, model: string, make: string}) {
//     return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`;
// }

function formatCar(car: Car) {
    return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`;
}

formatCar({
    year: 2015,
    make: 'Ford',
    model: 'Mustang'
})
