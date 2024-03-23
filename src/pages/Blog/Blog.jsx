import React from "react";
import Banner from "../../Components/Banner/Banner";
import BlogBanner from "./images/banner.png";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../../Components/blogCard/BlogCard";

let api = "http://localhost:3000/Blogs";

const Blog = () => {
  const result = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>loading....</h1>;
  }

  return (
    <div>
      <Banner title="Recent News" img={BlogBanner} />
      <section className="w-full max-w-[1920px] mt-[120px] mx-auto flex justify-center">
        <div className="w-full max-w-[1460px] flex flex-wrap gap-[100px] ">
          {result.map((blogs, id) => (
            <Link to={`${blogs.id}`} key={id}>
              <BlogCard blogs={blogs} id={id} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

export const dataLoader1 = async () => {
  const res = await fetch(api);
  const jsonResult = await res.json();

  return jsonResult;
};
