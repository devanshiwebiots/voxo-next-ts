"use client";
import BlogInfiniteScroll from "@/Components/Blog/BlogInfiniteScroll";
import BreadCrumb from "@/Components/Element/BreadCrumb";
import FlowerSubscribe from "@/Components/FlowerDemo/FlowerSubscribe";
import { CommonPath } from "@/Constant";
import Layout1 from "@/Layout/Layout1";
import { getAllUsers } from "@/Service/FetchApi";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blog_infinite_scroll = () => {
  const dispatch = useDispatch();
  const types = "GETBLOGDATA";
  const { Blogdatanew } = useSelector((state) => state.BlogReducer);
  useEffect(() => {
    !Blogdatanew && dispatch(getAllUsers("blog", types));
  }, [Blogdatanew, dispatch]);
  return (
    <Layout1>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={"Blog Infinite Scroll"} title={"Blog Infinite Scroll"} />
      <BlogInfiniteScroll />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default Blog_infinite_scroll;
