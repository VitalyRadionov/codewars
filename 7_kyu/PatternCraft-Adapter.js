class Mario {
  jumpAttack() {
    console.log('Mamamia!');
    return 3;
  }
}

class MarioAdapter extends Mario {
  constructor(mario) {
    super();
    this.helth = mario.jumpAttack();
  }

  attack(target) {
    target.health = target.health - this.helth;
  }
}

const mario = new Mario();
const marioAdapter = new MarioAdapter(mario);
const target = { health: 33 };

marioAdapter.attack(target);

console.log(target.health); // 30