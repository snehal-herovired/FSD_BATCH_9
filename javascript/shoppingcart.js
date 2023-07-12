// Shopping Cart
const shoppingCart = {
    items: [],
  
    // Accessor property to get the total number of items in the cart
    get itemCount() {
      return this.items.length;
    },
  
    // Method to add an item to the cart
    addItem(product, price) {
      const item = { product, price };
      this.items.push(item);
    },
  
    // Method to remove an item from the cart
    removeItem(index) {
      if (index >= 0 && index < this.itemCount) {
        this.items.splice(index, 1);
      }
    },
  
    // Method to calculate the total price of the cart
    getTotalPrice() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price;
      });
      return total;
    },
  
    // Method to display the items in the cart
    displayCart() {
      console.log('Shopping Cart:');
      this.items.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item.product} - $${item.price}`);
      });
      console.log('---------------------------');
      console.log(`Total Price: $${this.getTotalPrice()}`);
    }
  };
  
  // Adding items to the cart
  shoppingCart.addItem('Product 1', 10);
  shoppingCart.addItem('Product 2', 20);
  shoppingCart.addItem('Product 3', 30);
  
  // Removing an item from the cart
  shoppingCart.removeItem(1);
  
  // Displaying the cart
  shoppingCart.displayCart();
  
  // Getting the total number of items using the accessor property
  console.log('Item Count:', shoppingCart.itemCount);
  
  // Using Object.entries() to iterate over the cart items
  console.log('Iterating over cart items using Object.entries():');
  Object.entries(shoppingCart.items).forEach(([index, item]) => {
    console.log(`Item ${Number(index) + 1}: ${item.product}`);
  });
  