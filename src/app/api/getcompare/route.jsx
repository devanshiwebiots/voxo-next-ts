import { NextResponse } from "next/server";
import Product from "../../ApiData/Product.json";
import { compareArr } from "../../ApiData/serverGlobalVariable";

export function GET() {
  const filterCart = Product.filter((data, i) => compareArr.includes(Number(data.id)))
  return NextResponse.json(filterCart);
}
