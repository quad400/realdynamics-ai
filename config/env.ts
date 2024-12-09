export const envConfig = {
    vapi: {
      token: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN ?? "",
      private: process.env.VAPI_PRIVATE_KEY ?? "",
    },
    mongodb: {
      uri: process.env.MONGODB_URI ?? "",
    }
  };
  