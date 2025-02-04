import { NextResponse } from "next/server";
import Product from "../../ApiData/Product.json";
import { newArr } from "../../ApiData/serverGlobalVariable";

export async function GET() {
  const filterCart = await Product.filter((data, i) => newArr.includes(data.id));
  return NextResponse.json(filterCart);
}
