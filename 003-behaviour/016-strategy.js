class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}

// дальше 3 стратегии Bus Taxi Car

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

// Оболочка которая взаимодействывает с разными стратегиями через один интерфейс
class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

const comute = new Commute();

console.log(comute.travel(new Car()));
console.log(comute.travel(new Taxi()));
console.log(comute.travel(new Bus()));
