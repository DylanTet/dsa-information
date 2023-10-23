// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  
  const item = {
    name: "Candy",
    price: 10,
  }
  
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.

  //SOLUTION//
  // Issue with my solution, according to functional programming, is due to arrays (OR ALL OBJECTS) being passed by reference w/ pointers,
  // my functions are mutating the original array being passed to it. What I need to be doing is creating local state and
  // mutating the locally copied state and returning.
  
  const moveItemToCart = (cart: typeof item[], purchasedItem: typeof item) => {
    
    cart.push(purchasedItem);
    cart[cart.length-1].price *= 0.03;
  }

  const buyItems = (purchaser: typeof user) => {
    purchaser.cart.forEach(item => user.purchases.push(item));
    purchaser.cart = [];
  }

moveItemToCart(user.cart, item);
console.log(user);
buyItems(user);
console.log(user);

//HIGH ORDER FUNCTION - A function that accepts other functions in its parameters.
const hof = (fn) => fn(5);
hof(function a(x) {return x})

// CLOSURES - the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.
function a() {
  let grandpa = 'grandpa'
  return function b() { // function b() is the inner function, that forms the closure
    let father = 'father'
    return function c() { // Another closure is formed here.
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`  // Using variables that were defined in the parent functions
    }                                           // that the outside doesn't have access to.
  }
}

a()

//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`hi ${name2}`)
    }
  }
}

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
let booString = boo2('sing');
let booStringName = booString('John');
let booStringNameName2 = booStringName('tanya')
