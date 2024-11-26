import { connect } from "@/libs/db";
import { User } from "@/libs/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connect();
    const { name, phoneNumber } = await req.json();

    await User.create({ name, phoneNumber });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    throw new NextResponse(err.message, { status: 500 });
  }
}

export async function GET() {
  try {
    await connect();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (err: any) {
    throw new NextResponse(err.message, { status: 500 });
  }
}