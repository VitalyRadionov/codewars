class Fly {
  move(unit) {
    return unit += 10;
  }
}

class Walk {
  move(unit) {
    return ++unit;
  }
}

class Viking {
  constructor() {
    this.moveBehavior = new Walk();
    this.position = 0;
  }

  move() {
    return this.position = this.moveBehavior.move(this.position);
  }
}

let viking = new Viking();

viking.move();
console.log(viking.position); // 1
viking.move();
console.log(viking.position); // 2

viking = new Viking();
viking.moveBehavior = new Fly();

viking.move();
console.log(viking.position); // 10
viking.move();
console.log(viking.position); // 20

viking = new Viking();

viking.move();
console.log(viking.position); // 1
viking.moveBehavior = new Fly();
viking.move();
console.log(viking.position); // 11