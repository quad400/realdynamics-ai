import Vapi from "@vapi-ai/web";
import { envConfig } from "@/config/env";

export const vapi = new Vapi(envConfig.vapi.token);
