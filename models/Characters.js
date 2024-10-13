import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  path: { type: String, required: true },
  element: { type: String, required: true },
  rarity: { type: String, required: true },
  image: { type: String, default: "" },
  eidolons: [
    {
      number: { type: String, required: true },
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, default: "" },
    },
  ],
});

export const Character = mongoose.model(
  "Characters",
  characterSchema,
  "characters"
);
