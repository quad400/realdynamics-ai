export const envConfig = {
    vapi: {
      token: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN ?? "",
    },
    mongodb: {
      uri: process.env.MONGODB_URI ?? "",
    }
  };
  