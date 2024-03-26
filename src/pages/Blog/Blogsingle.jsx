import React, { useEffect, useState } from "react";
import SingleBanner from "./images/banner.png";
import Banner from "../../Components/Banner/Banner";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blogsingle = () => {
  const [blogs, setBlogs] = useState(null);
  const { blogId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/Blogs/${blogId}`).then((blogCard) => {
      setBlogs(blogCard.data);
    });
  }, [blogId]);

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner title="Blog single" img={SingleBanner} />
      <section className="w-full max-w-[1400px] flex gap-[88px]" key={blogs.id}>
        <p>Blogsingle</p>
        <h5>{blogs.firstName}</h5>
        <h1>{blogs.title}</h1>
      </section>
    </div>
  );
};

export default Blogsingle;
