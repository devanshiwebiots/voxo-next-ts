import { NextResponse } from "next/server";
import Product from "../../../ApiData/Product.json";

export async function GET(req,{params}) {
  const id = params.id;
  var toSend = Product.filter((item) => item.id == id);
  var paramNotFound = toSend.length ? toSend : Product.filter((item) => item.id == 1);
  return NextResponse.json(paramNotFound);
}
