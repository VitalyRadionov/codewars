class Shape {
  [Symbol.toPrimitive]() {
    return this.area;
  }
}

class Square extends Shape {
  constructor(a) {
    super();
    this.area = a * a;
  }
}

class CustomShape extends Shape {
  constructor(a) {
    super();
    this.area = a;
  }
}

class Circle extends Shape {
  constructor(a) {
    super();
    this.area = (a * a) * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(a, b) {
    super();
    this.area = a * b;
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super();
    this.area = (a * b) / 2;
  }
}

const natural = (a, b) => Number(a > b) - Number(a < b);
const shapes = [
  new CustomShape(1.1234),
  new Square(1.1234),
  new Circle(1.1234),
  new Triangle(2, 5),
  new Triangle(3, 4),
  new Triangle(3, 4),
  new Rectangle(3, 4),
  new CustomShape(16.1)
];
shapes.sort(natural);
console.log(shapes);
