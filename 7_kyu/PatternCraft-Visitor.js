class Marine {
  constructor() {
    this.health = 100;
  }
  accept(visitor) {
    this.health -= visitor.visitLight();
  }
}

class Marauder {
  constructor() {
    this.health = 125;
  }
  accept(visitor) {
    this.health -= visitor.visitArmored();
  }
}

class TankBullet {
  visitLight(unit = 21) {
    return unit;
  }
  visitArmored(unit = 32) {
    return unit;
  }
}

let bullet = new TankBullet();
let light = new Marine();

light.accept(bullet);

console.log(light.health); // 100 - 21

let armored = new Marauder();

armored.accept(bullet);

console.log(armored.health); // 125 - 32