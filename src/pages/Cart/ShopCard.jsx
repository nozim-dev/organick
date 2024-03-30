import Banner from "../../Components/Banner/Banner";
import CardBanner from "./img/Image.png";

const ShopCard = () => {
  return (
    <>
      <Banner title="Card" img={CardBanner} />
      <section className="w-full max-w-[1920px]">
        <div className="w-full max-w-[1400px] flex justify-center ">Cart</div>
      </section>
    </>
  );
};

export default ShopCard;
