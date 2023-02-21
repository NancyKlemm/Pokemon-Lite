///////// Pokemon Lite /////////


class Pokemon {
    constructor(name, health, magic){
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    learnAttackSkill(attack){

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
    }
    attack(this.skill, target){
        if(magic){

        }
    }
    getMagic(){
        
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

// Attacks

let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkill(lightning);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
bulbasaur.learnAttackSkill(poisonSeed);



// Fight

// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);