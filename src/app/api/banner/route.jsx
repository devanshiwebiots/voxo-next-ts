import Banner from '../../ApiData/Banner.json'
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(Banner);
}
