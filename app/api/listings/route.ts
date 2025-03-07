import { APIError } from "../../../types";
import { NextResponse } from "next/server";

import listings from "../../../data/listings.json";

export function GET() {
  try {
    return NextResponse.json({ data: listings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch data" } as APIError, {
      status: 500,
    });
  }
}
