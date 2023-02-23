///////// Pokemon Lite /////////

// Pokemon Class

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
            let battleHealth = target.health - this.skills[index].damage;

            // // Magieprüfung
            // // Wenn die Magie größer oder gleich die Magic Points sind, dann ziehe die Magic Points von der Magie ab
            if (this.magic >= this.skills[index].magicPoints) {
                this.magic -= this.skills[index].magicPoints;

                // Wenn die gegnerische Gesundheit kleiner oder gleich 0 ist, dann hat das angreifende Pokemon gewonnen
                if (battleHealth <= 0) {
                    target.health -= this.skills[index].damage;
                    return `${this.name} launched skill ${this.skills[index].name} successfully
            ${target.name} got ${this.skills[index].damage} damage;
            ${this.name} defeated ${target.name}. ${this.name} won the Battle!`;
                }
                target.health -= this.skills[index].damage;
                return `${this.name} launched skill ${this.skills[index].name} successfully
                ${target.name} got ${this.skills[index].damage} damage`;
            }
            // // Wenn die Magie kleiner als die Magic Points ist, dann ist nicht genug Magie für den Angriff übrig
            else if (this.magic < this.skills[index].magicPoints) {
                return `not enough magic, cannot launch attack!`;
            }

            // // Wenn die gegnerische Gesundheit kleiner oder gleich 0 ist, dann hat das angreifende Pokemon gewonnen
        } else {
            return `${this.name} was already defeated!`;
        }
    }

    getMagic() {
        const magicPlus = 20;
        this.magic += magicPlus;
        return `${this.name} got ${magicPlus} magic back`;
    }

    usePoison() {
        const poison = 30;
        this.health += poison;
        return `${this.name} got ${poison} health back`;
    }
}

// AttackSkill Class

class AttackSkill {
    constructor(name, damage, magicPoints) {
        this.name = name;
        this.damage = damage;
        this.magicPoints = magicPoints;
    }
}

// Pokemon

const pikachu = new Pokemon("pikachu", 120, 80);
const bulbasaur = new Pokemon("bulbasaur", 95, 105);
const guardevoir = new Pokemon("guardevoir", 220, 130);
const umbreon = new Pokemon("umbreon", 150, 90);

// Pikachu Attacks

const lightning = new AttackSkill("lightning", 40, 30);
const thunder = new AttackSkill("thunder", 80, 50);
console.log(pikachu.skills);
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu);
console.log(pikachu.learnAttackSkill(thunder));
console.log(pikachu);

// Bulbasaur Attacks

const poisonSeed = new AttackSkill("poison seed", 20, 20);
const razorLeaf = new AttackSkill("razor leaf", 50, 30);
console.log(bulbasaur.skills);
console.log(bulbasaur.learnAttackSkill(poisonSeed));
console.log(bulbasaur);
console.log(bulbasaur.learnAttackSkill(razorLeaf));
console.log(bulbasaur);

// Guardevoir Attacks

const confusion = new AttackSkill("confusion", 35, 30);
const psybeam = new AttackSkill("psybeam", 60, 50);
console.log(guardevoir.skills);
console.log(guardevoir.learnAttackSkill(confusion));
console.log(guardevoir);
console.log(guardevoir.learnAttackSkill(psybeam));
console.log(guardevoir);

// Umbreon Attacks

const bite = new AttackSkill("bite", 30, 20);
const darkPulse = new AttackSkill("dark pulse", 80, 50);
console.log(umbreon.skills);
console.log(umbreon.learnAttackSkill(bite));
console.log(umbreon);
console.log(umbreon.learnAttackSkill(darkPulse));
console.log(umbreon);

// Battle

console.log("---------------Battle-1----------------");
console.log("----status-before-the-battle-begins----");
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("--------------Battle-start!-------------");
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));
console.log("--------status-during-the-battle!-------");
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("----------continue-the-battle!----------");
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.attack(0, bulbasaur));
console.log("------------get-magic-plus--------------");
console.log(pikachu.getMagic());
console.log("----------continue-the-battle!----------");
console.log(pikachu.attack(0, bulbasaur));
console.log("--------------Battle-end!---------------");
console.log(bulbasaur.attack(0, pikachu));

console.log("__________________________________________");

console.log("---------------Battle-2----------------");
console.log("----status-before-the-battle-begins----");
console.log(umbreon.showStatus());
console.log(guardevoir.showStatus());
console.log("--------------Battle-start!-------------");
