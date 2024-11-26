import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

export const User = models?.User || model("User", userSchema);
