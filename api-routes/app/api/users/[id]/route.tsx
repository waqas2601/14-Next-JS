// app/api/users/[id]/route.ts
import { user } from "@/app/util/db";
import { NextRequest, NextResponse } from "next/server";

// GET single user by ID
export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const foundUser = user.find((u) => u.id === id);

  if (!foundUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(foundUser, { status: 200 });
}

// PUT to update a user by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  let payload = await request.json();

  // Find the user
  const index = user.findIndex((u) => u.id === id);
  if (index === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Update the user
  user[index] = { ...user[index], ...payload, id };
  console.log("Updated user:", user[index]);

  return NextResponse.json({ message: "User updated", user: user[index] });
}
