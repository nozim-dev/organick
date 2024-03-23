import React from "react";
import SingleBanner from "./images/banner.png";
import Banner from "../../Components/Banner/Banner";



const Blogsingle = () => {

  return (
    <div>
      <Banner title="Blog single" img={SingleBanner} />
      <section className="w-full max-w-[1400px] flex gap-[88px]">
      </section>
    </div>
  );
};

export default Blogsingle;

let api = "http://localhost:3000/Blogs";

export const postLoader1 = async ({ params }) => {
  const res = await fetch(`${api}/${params.blogId}`);
  const resJson = await res.json();

  return resJson;
};
