// Чтоб еффективно передавать и работать с данными через различные типы объектов
// ДЛя того чтоб избежать повторной загрузки уже загруженных елементов
// кеширование, сохранение в памяти

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  // тут создаю новую машину если такой ещё нет в массиве this.cars = [];
  // это и есть одна из реализаций flyweight
  create(model, price) {
    const candidate = this.getCar(model); // проверяю есть ли такая машина в массиве

    if (candidate) {
      return candidate; // если уже есть просто верну её не создавая
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const bmwX6 = factory.create("bmw", 10000);
const audi = factory.create("audi", 12000);
const bmwX3 = factory.create("bmw", 8000);

console.log(bmwX3 === bmwX6);
