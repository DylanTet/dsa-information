### PROTOTYPAL INHERITANCE ###
- In JS, arrays and functions inherit from the object base class. So in other words arrays and functions are actually just objects. They get access to the methods and properties of objects via PROTOTYPAL INHERITANCE which is just a chain or link to the parent object.

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire)
console.log(lizard.sing())
const lizardFire = dragon.sing.bind(lizard)
console.log(lizardFire())

- So when you create a class in JS, you're actually just creating an object under the hood and then linking the children (if there are any) to the parent via "__proto__" which is just linking the child to the parent.