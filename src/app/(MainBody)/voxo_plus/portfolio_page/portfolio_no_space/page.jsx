"use client";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommonPath } from "@/Constant";
import { getAllUsers } from "@/Service/FetchApi";
import Layout1 from "@/Layout/Layout1";
import BreadCrumb from "@/Components/Element/BreadCrumb";
import FlowerSubscribe from "@/Components/FlowerDemo/FlowerSubscribe";
import PortfolioMasonaryContain from "@/Components/VoxoPlus/PortfolioPage/PortfolioMasonary";

const PortfolioNoSpace = () => {
  const dispatch = useDispatch();
  const types = "GETPORTFOLIODATA";
  const { portfoliodata } = useSelector((state) => state.PortfolioReducer);
  useEffect(() => {
    !portfoliodata && dispatch(getAllUsers("portfolio", types));
  }, [dispatch, portfoliodata]);
  const colclass = "col-lg-4 col-md-12";
  const masonaryclass = 3;
  const rowclass = "g-0";
  const noSpace = true;
  return (
    <Layout1>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={"Portfolio Masonary"} title={"Portfolio Masonary"} />
      <PortfolioMasonaryContain portfoliodata={portfoliodata} colclass={colclass} masonaryclass={masonaryclass} rowclass={rowclass} noSpace={noSpace} />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default PortfolioNoSpace;
