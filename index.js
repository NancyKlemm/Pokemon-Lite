///////// Pokemon Lite /////////


class Pokemon {
    constructor(name, health, magic){
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    learnAttackSkill(attack){
        const add = this.skills.push(attack); 
        return this.skills;
    }

    showStatus(){
        if(this.health < 1){
            return `${this.name} was defeated.`
        } else {

        return `${this.name} status
        health: ${this.health}
        magic: ${this.magic}`
        }
    }
    attack(index, target){
        // Magie Prüfung
        if(this.magic >= this.skills.kT){
            this.magic -= this.skills.kT
        // Kampfunfähigkeitsprüfung
        } else if(target.health <= 0){
            return `${this.name} defeated ${target.name}. You won the Battle!` 
       // Prüfung der Ausführbarkeit der Attacke
        } else if (target.health > 0) {
           const dam = target.health - this.skills[index].damage;
            return `${this.name} launched skill ${this.skills[index].name} successfully
            ${target.name} got ${dam} health and got ${this.skills[index].damage} damage`

        // Prüfung der KT Kosten
        } else if (this.magic <= this.skills.kT){
           return `not enough magic, cannot launch attack!`}
        }
       
    getMagic(){
           const newMagic = this.magic + 20;
            return `${this.name} got ${newMagic} magic back`
    }
}


// Pokemon

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);



class AttackSkill {
    constructor(name,damage,kT){
        this.name = name;
        this.damage = damage;
        this.kT = kT;
    }
}

// Pikachu Attacks

let lightning = new AttackSkill("lightning", 40, 30);
let thunder = new AttackSkill("thunder", 80, 50);
console.log('num 1' +pikachu.skills);
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu);
console.log(pikachu.learnAttackSkill(thunder));
console.log(pikachu);

console.log("______________________________");

// Bulbasaur Attacks

let poisonSeed = new AttackSkill ("poison seed", 20, 20);
let razorLeaf = new AttackSkill ("razor leaf", 50, 30)
console.log(bulbasaur.skills);
console.log(bulbasaur.learnAttackSkill(poisonSeed));
console.log(bulbasaur);
console.log(bulbasaur.learnAttackSkill(razorLeaf));
console.log(bulbasaur);


// Fight
console.log('First fight ' +pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("_________________________________");
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));
console.log("_________________________________");
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log("_________________________________");
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.getMagic());
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));

console.log(pikachu);