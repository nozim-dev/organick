import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("");

const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);
  const [productData, setProductData] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  const AddToCard = (shopId, ItemCount) => {
    // check if the item is already in the cart
    const isItemInCart = productData.find((cartItem) => cartItem.id === shopId);
    if (isItemInCart) {
      setProductData(
        // if the item is already in the cart, increase the count of the item
        productData.map(
          (productItem) =>
            productItem.id === shopId
              ? {
                  ...productItem,
                  count: productItem.count + Number(ItemCount.current.value),
                }
              : productItem // otherwise, return the cart item
        )
      );
    } else {
      setProductData([
        ...productData,
        {
          ...cardDetails,
          count: Number(ItemCount.current.value),
        },
      ]); // if the item is not in the cart, add the item to the cart with new key count with value
    }
  };

  const RemoveItem = (id) => {
    setProductData(productData.filter((cartItem) => cartItem.id !== id));
  };

  const getCartTotal = () => {
    return productData.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("items");
    if (data) {
      setProductData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(productData));
  }, [productData]);

  const ContextData = {
    productData,
    setProductData,
    AddToCard,
    setCardDetails,
    cardDetails,
    RemoveItem,
    getCartTotal,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <ProductContext.Provider value={ContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;

// deploy backend bilan
