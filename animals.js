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


class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error('Shape is abstract and cannot be instantiated directly.');
    }
    this.name = name;
  }

  area() {
    throw new Error('Method "area()" must be implemented.');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle');
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.area()); // 78.5398...

class UserProfile {
  fullName    = null;
  phoneNumber = null;

// Destructure the first element of the array
  constructor([ { username, email, avatar = 'default.png' } ]) {
    this.username = username;
    this.email    = email;
    this.avatar   = avatar;
  }
}

// Usage: pass an array
const user = new UserProfile([
  { email: 'a@b.com', username: 'alice' }
]);
console.log(user.fullName); // null

class UserProfile2 {
  fullName    = null;
  phoneNumber = null;

  constructor({ username, email, avatar = 'default.png' }) {
    this.username = username;
    this.email    = email;
    this.avatar   = avatar;
  }
}

// Usage
const user2 = new UserProfile2({ email: 'a@b.com', username: 'alice' });
console.log(user2.fullName); // null