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
  this.setHealth = function(hpArg) {
    return (hp -= hpArg);
  };
  this.atack = function(arg) {
    // if (typeof arg === "object") {
    //   console.log(arg);
    //   console.log(arg.getName());
    //   console.log(arg.getHealth());
    //   console.log(arg.getDamage());
    //   console.log(arg.getAgility());'
    // }
    // console.log(this.getHealth());

    let randomAttack = Math.floor(Math.random() * 100);
    console.log(randomAttack, " - ramdom");
    if (randomAttack < 100 - arg.getAgility()) {
      console.log(`Attack success`);
      console.log(
        `${this.getName()} make ${this.getDamage()} to ${arg.getName()}`
      );
      arg.setHealth(this.getDamage());
      console.log(arg.getHealth());
      win++;
    } else {
      console.log(`${this.getName()} attack missed`);
      loss++;
    }
  };
  this.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${win} , Losses: ${loss}`);
  };
  this.heal = function(arg) {
    hp += arg;
    console.log(hp, " - hp");
  };
  this.dealDamage = function(arg) {
    hp - arg < 0 ? hp = 0 : hp -= arg;
    console.log(hp, ' - hp');
  };
  this.addWin = function() {
    win++;
    console.log(win);
  };
  this.addLoss = function() {
    loss++;
    console.log(loss);
  }
}




let myFighter = new Fighter("Jhon", 20, 100, 25);
let damager = new Fighter("Andru", 30, 70, 40);
let damager2 = new Fighter("Su", 70, 100, 5);

// name, damage, hp, agility
myFighter.atack(damager);
