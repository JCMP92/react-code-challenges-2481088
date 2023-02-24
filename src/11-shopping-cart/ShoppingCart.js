import { useState } from 'react';

function ShoppingCart() {
  const items = [
    {
      name: 'apple',
      price: 0.39,
    },
    {
      name: 'banana',
      price: 0.79,
    },
    {
      name: 'cherry tomatoes',
      price: 3.99,
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  function itemsToCart(itemAdded) {
    let cartCopy = [...cartItem];
    const alreadyAdded = cartCopy.find((i) => itemAdded.name === i.name);
    if (alreadyAdded) {
      alreadyAdded.quantity += 1;
      setCartItem(cartCopy);
    } else {
      setCartItem((prevItem) => {
        return [...prevItem, { ...itemAdded, quantity: 1 }];
      });
    }
  }

  function oneMore(item) {
    let cartCopy = [...cartItem];
    const theItem = cartCopy.find((i) => item.name === i.name);
    theItem.quantity += 1;
    setCartItem(cartCopy);
  }

  function oneLess(item) {
    let cartCopy = [...cartItem];
    const theItem = cartCopy.find((i) => item.name === i.name);
    theItem.quantity -= 1;
    if (theItem.quantity === 0) {
      removeCartItem(theItem.name);
    } else {
      setCartItem(cartCopy);
    }
  }

  function removeCartItem(itemToRemove) {
    const notRemovedItems = cartItem.filter(
      (item) => item.name !== itemToRemove
    );
    setCartItem(notRemovedItems);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => itemsToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cartItem.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => oneLess(item)}>-</button>
                {item.quantity}
                <button onClick={() => oneMore(item)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>
          Total: $
          {cartItem
            .reduce((acc, i) => acc + i.quantity * i.price, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
