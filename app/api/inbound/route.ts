import { envConfig } from "@/config/env";
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log(body);

    const values = {
      assistantId: body.assistantId,
      provider: "vapi",
      sipUri: "sip:coderblack@sip.vapi.ai"
    };

    const { data } = await axios.post(
      "https://api.vapi.ai/phone-number",
      values,
      {
        headers: {
          Authorization: `Bearer ${envConfig.vapi.private}`,
        },
      }
    );

    console.log(data);
    return NextResponse.json({
      message: "Inbound Created Successfully",
      //   assistant,
    });
  } catch (error: any) {
    console.log(error.response.data);
  }
};
