class CarListing {
    constructor(car =[]) {
        this.car = car;
    }
    addCar(car) {
        return this.car.push(car);
    }
    removeCar(car) {
        return this.car.pop(car);
    }
}

const carListA = new CarListing(["Mazda", "Ford", "Toyota"]);

// How do I call the addCar function to add another car to carListA?
carListA.addCar("Chevrolet");

console.log(carListA);

// function sayHi(name = 'unknown') {
//     // name = name : "unknown";
//     console.log(`Hi ${name}`);
// }

// sayHi("John");