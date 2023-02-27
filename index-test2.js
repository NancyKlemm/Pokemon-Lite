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
        return `${this.name} status
          health: ${this.health}
          magic: ${this.magic}`;
    }

    attack(index, target) {
        // Kampfüberprüfung
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
                    ${target.name} got ${this.skills[index].damage} damage 
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

            // // Das Pokemon wurde bereits besiegt!
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
const gardevoir = new Pokemon("guardevoir", 220, 130);
const umbreon = new Pokemon("umbreon", 150, 90);
const poliwag = new Pokemon("poliwag", 100, 80);
const arcanine = new Pokemon("arcanine", 250, 140);

// Pikachu Attacks
const lightning = new AttackSkill("lightning", 40, 30);
const thunderShock = new AttackSkill("thunder shock", 50, 40);
const spark = new AttackSkill("spark", 70, 50);
const thunder = new AttackSkill("thunder", 100, 50);
console.log(pikachu.skills);
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu);
console.log(pikachu.learnAttackSkill(thunderShock));
console.log(pikachu.learnAttackSkill(spark));
console.log(pikachu.learnAttackSkill(thunder));
console.log(pikachu);

// Bulbasaur Attacks
const poisonSeed = new AttackSkill("poison seed", 20, 20);
const vineWhip = new AttackSkill("vine whip", 30, 20);
const razorLeaf = new AttackSkill("razor leaf", 50, 30);
const doubleEdge = new AttackSkill("double edge", 90, 50);
console.log(bulbasaur.skills);
console.log(bulbasaur.learnAttackSkill(poisonSeed));
// console.log(bulbasaur);
// console.log(bulbasaur.learnAttackSkill(vineWhip));
// console.log(bulbasaur.learnAttackSkill(razorLeaf));
// console.log(bulbasaur.learnAttackSkill(doubleEdge));
// console.log(bulbasaur);

// Gardevoir Attacks
const confusion = new AttackSkill("confusion", 35, 30);
const drainingKiss = new AttackSkill("draining kiss", 50, 40);
const psybeam = new AttackSkill("psybeam", 60, 50);
const psychic = new AttackSkill("psychic", 130, 70);
console.log(gardevoir.skills);
console.log(gardevoir.learnAttackSkill(confusion));
// console.log(gardevoir);
// console.log(gardevoir.learnAttackSkill(drainingKiss));
// console.log(gardevoir.learnAttackSkill(psybeam));
// console.log(gardevoir.learnAttackSkill(psychic));
// console.log(gardevoir);

// Umbreon Attacks
const tackle = new AttackSkill("tackle", 40, 40);
const bite = new AttackSkill("bite", 50, 30);
const quickAttack = new AttackSkill("quick attack", 30, 20);
const darkPulse = new AttackSkill("dark pulse", 80, 50);
console.log(umbreon.skills);
console.log(umbreon.learnAttackSkill(tackle));
// console.log(umbreon);
// console.log(umbreon.learnAttackSkill(bite));
// console.log(umbreon.learnAttackSkill(quickAttack));
// console.log(umbreon.learnAttackSkill(darkPulse));
// console.log(umbreon);

// Poliwag Attacks
const waterGun = new AttackSkill("water gun", 30, 20);
const bubbleBeam = new AttackSkill("bubble beam", 50, 40);
const bodySlam = new AttackSkill("body slam", 70, 50);
const hydroPump = new AttackSkill("hydro pump", 110, 60);
console.log(poliwag.skills);
console.log(poliwag.learnAttackSkill(waterGun));
// console.log(poliwag);
// console.log(poliwag.learnAttackSkill(bubbleBeam));
// console.log(poliwag.learnAttackSkill(bodySlam));
// console.log(poliwag.learnAttackSkill(hydroPump));
// console.log(poliwag);

// Arcanine Attacks
const ember = new AttackSkill("ember", 30, 20);
const fireFang = new AttackSkill("fire fang", 40, 30);
const crunch = new AttackSkill("crunch", 60, 50);
const flamethrower = new AttackSkill("flamethrower", 100, 70);
console.log(arcanine.skills);
console.log(arcanine.learnAttackSkill(ember));
// console.log(arcanine);
// console.log(arcanine.learnAttackSkill(fireFang));
// console.log(arcanine.learnAttackSkill(crunch));
// console.log(arcanine.learnAttackSkill(flamethrower));
// console.log(arcanine);

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
console.log(bulbasaur.showStatus());

console.log("__________________________________________");

console.log("---------------Battle-2----------------");
console.log("----status-before-the-battle-begins----");
console.log(umbreon.showStatus());
console.log(gardevoir.showStatus());
console.log("--------------Battle-start!-------------");
console.log(umbreon.attack(0, gardevoir));