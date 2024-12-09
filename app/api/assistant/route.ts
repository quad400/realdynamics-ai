import { envConfig } from "@/config/env";
import { connect } from "@/libs/db";
import { Assistant } from "@/libs/models/assistant";
import axios from "axios";
import { model } from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const value = {
      name: body.name,
      model: {
        provider: "openai",
        model: "gpt-4o",
        temperature: 0.7,
        systemPrompt: body.systemPrompt,
      },
      firstMessage: body.firstMessage,
    };
    console.log(value);
    const { data } = await axios.post("https://api.vapi.ai/assistant", value, {
      headers: {
        Authorization: `Bearer ${envConfig.vapi.private}`,
      },
    });

    await connect();
    const assistant = await Assistant.create({
      name: body.name,
      assistantId: data.id,
    });

    return NextResponse.json({
      message: "Assistant Created Successfully",
      assistant,
    });
  } catch (error: any) {
    console.log(error.response.data);
    return new NextResponse("Internal Server Error");
  }
};

export const GET = async () => {
  try {
    await connect();
    const assistants = await Assistant.find();
    return NextResponse.json(assistants);
  } catch (error: any) {
    console.log(error.response.data);
    return new NextResponse("Internal Server Error");
  }
};
