import axios from "axios";
import { Assistant } from "./models/assistant";
import { connect } from "./db";
import { toast } from "sonner";

export const getAssistants = async () => {
  await connect();
  const data = await Assistant.find();
  return data;
};

export const createPhone = async (assistantId: string) => {
  await axios.post("/api/inbound", { assistantId });
  toast.success("Inbound created");
};
