class Marine {
  constructor(_damage, _armor) {
    this._damage = _damage;
    this._armor = _armor;
  }

  get damage() { return this._damage; }
  set damage(value) { this._damage = value; }

  get armor() { return this._armor; }
  set armor(value) { this._armor = value; }
}

class MarineWeaponUpgrade {
  constructor(marine) {
    this.damage = marine._damage;
    this.armor = marine._armor;
  }

  get damage() { return this._damage; }
  set damage(value) { this._damage = value + 1; }

  get armor() { return this._armor; }
  set armor(value) { this._armor = value; }
}

class MarineArmorUpgrade {
  constructor(marine) {
    this.damage = marine._damage;
    this.armor = marine._armor;
  }

  get damage() { return this._damage; }
  set damage(value) { this._damage = value; }

  get armor() { return this._armor; }
  set armor(value) { this._armor = value + 1 }
}


let marine = new Marine(10, 1);

// console.log(marine.damage);

console.log(new MarineWeaponUpgrade(marine).damage); // 11
console.log(new MarineWeaponUpgrade(marine).damage); // 11

console.log(new MarineArmorUpgrade(marine).armor); // 2
console.log(new MarineArmorUpgrade(marine).armor); // 2

marine = new Marine(15, 1);
marine = new MarineWeaponUpgrade(marine);
marine = new MarineWeaponUpgrade(marine);

console.log(marine.damage); // 17

marine = new MarineArmorUpgrade(marine);
marine = new MarineArmorUpgrade(marine);

console.log(marine.armor); // 3

marine = new MarineWeaponUpgrade(marine);
marine = new MarineWeaponUpgrade(marine);

console.log(marine.damage); // 19

// marine = new Marine(20, 1);
// marine = new MarineWeaponUpgrade(marine);
// marine = new MarineWeaponUpgrade(marine);
// marine = new MarineWeaponUpgrade(marine);

// console.log(marine.damage); // 23