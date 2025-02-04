"use client";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommonPath } from "@/Constant";
import Layout1 from "@/Layout/Layout1";
import BreadCrumb from "@/Components/Element/BreadCrumb";
import FlowerSubscribe from "@/Components/FlowerDemo/FlowerSubscribe";
import PortFolioGridContain from "@/Components/VoxoPlus/PortfolioPage/PortFolioGrid";
import { getAllUsers } from "@/Service/FetchApi";


const Portfolio2Grid = () => {
  const dispatch = useDispatch();
  const types = "GETPORTFOLIODATA";
  const { portfoliodata } = useSelector((state) => state.PortfolioReducer);
  useEffect(() => {
    !portfoliodata && dispatch(getAllUsers("portfolio", types));
  }, [dispatch, portfoliodata]);
  const colclass = "col-sm-6";
  return (
    <Layout1>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={"Portfolio Grid"} title={"Portfolio Grid"} />
      <PortFolioGridContain portfoliodata={portfoliodata} colclass={colclass} />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default Portfolio2Grid;
