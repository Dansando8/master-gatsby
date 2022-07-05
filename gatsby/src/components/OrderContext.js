import React, { useState } from 'react';

// Create an order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // we need to stick state in here
  const [order, setOrder] = useState('💩');

  // Return the component that will be the state provider
  return <OrderContext.Provider>{children}</OrderContext.Provider>;
}

export default OrderContext;
