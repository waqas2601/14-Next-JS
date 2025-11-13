import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(user, { status: 200 });
}

export async function POST(request: Request) {
  const payload = await request.json();

  const { name, age, email } = payload;

  if (!name || !age || !email) {
    return NextResponse.json(
      { error: "Required fields missing" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Data received successfully", data: payload },
    { status: 200 }
  );
}
