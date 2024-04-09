import { createContext, useState } from "react";

export const ProductContext = createContext("");

const Context = ({ children }) => {
  const [productCount, setProductCount] = useState(0);
  const [productData, setProductData] = useState([]);

  const ContextData = {
    productCount,
    setProductCount,
    productData,
    setProductData,
  };

  return (
    <ProductContext.Provider value={ContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;

// Statelarni localniy storage saqlash
// Narxlarni hisoblash
// deploy backend bilan