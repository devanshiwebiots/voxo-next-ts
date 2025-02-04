"use client";
import BreadCrumb from "@/Components/Element/BreadCrumb";
import FlowerSubscribe from "@/Components/FlowerDemo/FlowerSubscribe";
import Layout1 from "@/Layout/Layout1";
import { getAllUsers } from "@/Service/FetchApi";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommonPath } from "@/Constant";
import BlogDetails from "@/Components/Blog/BlogDetails";
import RelatedBlog from "@/Components/Blog/BlogDetails/RelatedBlog";

const Blog_details = () => {
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
      <BreadCrumb parent={"Blog Details"} title={"Blog Details"} />
      <BlogDetails />
      <RelatedBlog />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default Blog_details;
