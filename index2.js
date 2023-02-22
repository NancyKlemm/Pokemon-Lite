///////// Pokemon Lite /////////

class Pokemon {
    constructor(name, health, magic) {
      this.name = name;
      this.health = health;
      this.magic = magic;
      this.skills = [];
    }
  
    learnAttackSkill(attack) {
      const add = this.skills.push(attack);
      return this.skills;
    }
  
    showStatus() {
      if (this.health < 1) {
        return `${this.name} was defeated.`;
      } else {
        return `${this.name} status
          health: ${this.health}
          magic: ${this.magic}`;
      }
    }
  
    attack(index, target) {
      /** Check if target has enough Health */
      
  
      // Kampfunfähigkeitsprüfung
      // // Wenn die gegnerische Gesundheit größer 0 ist, dann bekommt der Gegner Damage
      if (target.health > 0 && this.health > 0) {
        let hel = target.health - this.skills[index].damage;
  
        // // Magieprüfung
        // // Wenn die Magie größer oder gleich die Magic Points sind, dann ziehe die Magic Points von der Magie ab
        if (this.magic >= this.skills[index].magicPoints) {
          this.magic -= this.skills[index].magicPoints;
  
          if (hel <= 0) {
            target.health -= this.skills[index].damage;
            return `${this.name} launched skill ${this.skills[index].name} successfully
            ${target.name} got ${this.skills[index].damage} damage;
            ${this.name} defeated ${target.name}. ${this.name} won the Battle!`;
          }
  
          target.health -= this.skills[index].damage;
          return `${this.name} launched skill ${this.skills[index].name} successfully
                ${target.name} got ${this.skills[index].damage} damage`;
        }
        // // Wenn die Magie kleiner als die Magic Points ist, dann ist nicht genuf Magie für den Angriff übrig
        else if (this.magic < this.skills[index].magicPoints) {
          return `not enough magic, cannot launch attack!`;
        }
  
        // // Wenn die gegnerische Gesundheit kleiner oder gleich 0 ist, dann hat das angreifende Pokemon gewonnen
      } else {
        //   return `${this.name} defeated ${target.name}. ${this.name} won the Battle!`;
        return `${this.name} was already defeated!`;
      }
    }
  
    getMagic() {
      const magicPlus = 20;
      this.magic += magicPlus;
      return `${this.name} got ${magicPlus} magic back`;
    }
  }
  
  // Pokemon
  
  let pikachu = new Pokemon("pikachu", 120, 80);
  let bulbasaur = new Pokemon("bulbasaur", 95, 105);
  
  class AttackSkill {
    constructor(name, damage, magicPoints) {
      this.name = name;
      this.damage = damage;
      this.magicPoints = magicPoints;
    }
  }
  
  // Pikachu Attacks
  
  let lightning = new AttackSkill("lightning", 40, 30);
  let thunder = new AttackSkill("thunder", 80, 50);
  console.log(pikachu.skills);
  console.log(pikachu.learnAttackSkill(lightning));
  console.log(pikachu);
  console.log(pikachu.learnAttackSkill(thunder));
  console.log(pikachu);
  
  // Bulbasaur Attacks
  
  let poisonSeed = new AttackSkill("poison seed", 20, 20);
  let razorLeaf = new AttackSkill("razor leaf", 50, 30);
  console.log(bulbasaur.skills);
  console.log(bulbasaur.learnAttackSkill(poisonSeed));
  console.log(bulbasaur);
  console.log(bulbasaur.learnAttackSkill(razorLeaf));
  console.log(bulbasaur);
  
  // Fight
  console.log("-------------Battle-----------------");
  
  console.log(pikachu.showStatus());
  console.log(bulbasaur.showStatus());
  
  console.log(pikachu.attack(0, bulbasaur));
  console.log(bulbasaur.attack(0, pikachu));
  
  console.log(pikachu.showStatus());
  console.log(bulbasaur.showStatus());
  
  console.log("-------------------");
  console.log(pikachu.attack(0, bulbasaur));
  console.log(pikachu.attack(0, bulbasaur));
  console.log(pikachu.getMagic());
  
  console.log(pikachu.attack(0, bulbasaur));
  
  console.log(bulbasaur.attack(0, pikachu));