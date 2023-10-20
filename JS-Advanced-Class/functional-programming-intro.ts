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
