"use client";
import { CommonPath } from "@/Constant";
import BreadCrumb from "@/Components/Element/BreadCrumb";
import FlowerSubscribe from "@/Components/FlowerDemo/FlowerSubscribe";
import CanvasOffset from "@/Components/Shop/ShopCanvasFilter/CanvasOffset";
import ShopListInfiniteContain from "@/Components/Shop/ShopListInfinite/ShopListInfinite";
import Layout1 from "@/Layout/Layout1";
import { getAPIData } from "@/Utils";
import Head from "next/head";
import { useEffect, useState } from "react";

const ShopListInfinite = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const types = ["products"];
    types.map((type) => {
      getAPIData(`/api/${type}`).then((res) => {
        type === "products" && setProductData(res?.data);
      });
    });
  }, []);
  const listGrid = true;
  return (
    <Layout1>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={"Shop List Infinite"} title={"Shop List Infinite"} />
      <ShopListInfiniteContain productData={productData} listGrid={listGrid} />
      <FlowerSubscribe />
      <CanvasOffset productData={productData} />
    </Layout1>
  );
};

export default ShopListInfinite;
