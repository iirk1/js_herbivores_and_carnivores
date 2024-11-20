'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health = 100, name, hidden) {
    super(health, name, hidden);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
  }

  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
