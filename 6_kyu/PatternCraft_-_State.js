class SiegeState {
  constructor() {
    this.canMove = false;
    this.damage = 20;
  }
}

class TankState {
  constructor(canMove = true, damage = 5) {
    this.canMove = canMove;
    this.damage = damage;
  }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }

  get canMove() { return this.state.canMove }
  get damage() { return this.state.damage }
}


let tank = new Tank();

console.log(tank.canMove); // true
console.log(tank.damage); // 5
// tank.state = new SiegeState();
// console.log(tank.state);

tank = new Tank();
tank.state = new SiegeState();

console.log(tank.canMove); // false
console.log(tank.damage); // 20

tank = new Tank();
console.log(tank.canMove); // true
tank.state = new SiegeState();
console.log(tank.damage); // 20