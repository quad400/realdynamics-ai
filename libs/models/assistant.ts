import { model, models, Schema } from "mongoose";

const assistantSchema = new Schema({
  name: { type: String, required: true },
  phoneId: {type: String},
  assistantId: { type: String, required: true },
});

export const Assistant = models?.Assistant || model("Assistant", assistantSchema);
