
// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength
    this.attack = () => this.strength
    this.receiveDamage = damage => {
        this.health = this.health - damage
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name
    this.receiveDamage = damage => {
        this.health = this.health - damage
        if (this.health <= 0) return name + " has died in act of combat"
        else return name + " has received " + damage + " points of damage"
    }
    this.battleCry = () => "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.attack = () => this.strength
    this.receiveDamage = damage => {
        this.health = this.health - damage
        if (this.health <= 0) return "A Saxon has died in combat"
        else return "A Saxon has received " + damage + " points of damage"
    }
}

// // War

// class War {}

// No le entré a la guerra por que soy pacifista ✌🏼☮