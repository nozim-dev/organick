import React from "react";
import Banner from "../../Components/Banner/Banner";
// import { style } from "../../utils/style";
import BlogBanner from "./images/banner.png";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../../Components/blogCard/BlogCard";


// import Vector from "./images/Vector.png";
// import Button from "../../Components/Button/Button";
let api = "http://localhost:5173/blog";


const Blog = () => {

  const result = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>loading....</h1>;
  }

  return (
    <div>
      <section>
        <Banner title="Recent News" img={BlogBanner} />
      </section>
      <section className="w-full max-w-[1920px] mt-[120px] mx-auto flex justify-center">
        <div className="w-full max-w-[1460px] flex flex-wrap gap-[100px] ">
        {result.map((Blogs, id) => (
          <Link to={`${Blogs.id}`} key={id}>
            <BlogCard Blogs={Blogs} id={id} />
          </Link>
        ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

export const dataLoader = async () => {
  const res = await fetch(api);
  const jsonResult = await res.json();

  return jsonResult;
};

