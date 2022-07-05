import React, { useState } from 'react';

function usePizza({ pizzas, inputs }) {
  // Create state to hold the order
  const [order, setOrder] = useState([]);
  // Create function to add things to the order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // Create function to take off things from an order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // Everything after the element
      ...order.slice(index + 1),
    ]);
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
export default usePizza;
