import { NextResponse } from "next/server";
import Product from "../../ApiData/Product.json";
import { storeId } from "../../ApiData/serverGlobalVariable";

export function GET() {
  const wishlistCart = Product.filter((data, i) => storeId.includes(data.id))
  return NextResponse.json(wishlistCart);
}
