import React from "react";
import Banner from "../../Components/Banner/Banner";
import BlogBanner from "./images/banner.png";

const Blog = () => {
  return (
    <div>
      <section>
        <Banner title="Recent  News" img={BlogBanner} />
      </section>
    </div>
  );
};

export default Blog;
