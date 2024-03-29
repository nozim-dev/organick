import React from "react";
import Banner from "./../../Components/Banner/Banner";
import CartBanner from "./img/Image.png";

const Cart = () => {
  return (
    <div>
      <Banner title="Cart" img={CartBanner} />
      <section className="w-full max-w-[1920px]">
        <div className="w-full max-w-[1400px] flex justify-center ">
            Cart
        </div>
      </section>
    </div>
  );
};

export default Cart;
