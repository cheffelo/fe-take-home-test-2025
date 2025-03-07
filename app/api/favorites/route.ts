import { NextResponse } from "next/server";
import { devdb } from "../../../lib/db";

const db = devdb();

export const GET = async () => {
  // Task 1
  return NextResponse.json({ message: "Not Implemented" }, { status: 501 });
};

export const POST = async () => {
  // Task 1
  return NextResponse.json({ message: "Not Implemented" }, { status: 501 });
};

export const DELETE = async () => {
  // Task 1
  return NextResponse.json({ message: "Not Implemented" }, { status: 501 });
};
