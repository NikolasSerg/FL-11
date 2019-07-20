function Fighter(name, damage, hp, agility) {
  let loss = 0,
    win = 0;
  this.getName = function() {
    return name;
  };
  this.getDamage = function() {
    return damage;
  };
  this.getAgility = function() {
    return agility;
  };
  this.getHealth = function() {
    return hp;
  };
  // this.setDamageofHealth = function(hpArg) {
  //   return hp - hpArg > 0 ? (hp = hp - hpArg) : (hp = 0);
  // };
  this.attack = function(arg) {
    let randomAmount = 100;
    if (typeof arg === 'object') {
      let randomAttack = Math.floor(Math.random() * randomAmount);
      // console.log(randomAttack, ' - ramdom');
      if (randomAttack < randomAmount - arg.getAgility()) {
        // console.log(`Attack success`);
        console.log(
          `${this.getName()} make ${this.getDamage()} damage to ${arg.getName()}`
        );
        // arg.setDamageofHealth(this.getDamage());
        arg.dealDamage(this.getDamage());
        // console.log(`${arg.getName()} health ${arg.getHealth()}`);
        this.addWin();
        // win++;
      } else {
        console.log(`${this.getName()} attack missed`);
        // loss++;
        this.addLoss();
      }
    } else {
      console.log('argument must be object');
    }
  };
  this.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${win} , Losses: ${loss}`);
  };
  this.heal = function(arg) {
    hp += arg;
    console.log(hp, ' - hp');
  };
  this.dealDamage = function(arg) {
    // console.log(hp, ' - hp');
    let rez = hp - arg < 0 ? hp = 0 : hp -= arg;
    return rez;

  };
  this.addWin = function() {
    win++;
    // console.log(win);
  };
  this.addLoss = function() {
    loss++;
    // console.log(loss);
  };
}

function battle(fighter, damager) {
  if (fighter.getHealth() === 0) {
    console.log(`${fighter.getName()} is dead and can't fight`);
    return;
  } else if (damager.getHealth() === 0) {
    console.log(`${damager.getName()} is dead and can't fight`);
    return;
  } else {
    console.log(`battle start`);
    for (let i = 0; fighter.getHealth() > 0 || damager.getHealth() > 0; i++) {
      if (fighter.getHealth() === 0 || damager.getHealth() === 0) {
        console.log(
          `battle finish ${
            fighter.getHealth() === 0 ? fighter.getName() : damager.getName()
          } health 0`
        );
        break;
      }
      fighter.attack(damager);
      if (fighter.getHealth() === 0 || damager.getHealth() === 0) {
        console.log(
          `battle finish ${
            fighter.getHealth() === 0 ? fighter.getName() : damager.getName()
          } health 0`
        );
        break;
      }
      damager.attack(fighter);
      console.log('------------------------------------------------');
    }
  }
}

// let myFighter = new Fighter('Jhon', 20, 100, 25);
// let damager = new Fighter('Andru', 30, 70, 40);
