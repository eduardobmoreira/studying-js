class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`${this.name} makes a sound.`);
        
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} roars.`);
    }
}

class Parrot extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} squawks. I want a cracker!`);
    }
}

class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} hisses.`);
    }
}

const lion = new Lion("Simba");
lion.makeSound();
const parrot = new Parrot("Polly");
parrot.makeSound();
const snake = new Snake("Seleste");
snake.makeSound();