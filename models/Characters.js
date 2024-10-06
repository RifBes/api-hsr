import mongoose from "mongoose";

export const eidolonSchema = new mongoose.Schema({
  number: Number,
  name: String,
  description: String,
  image: String,
});

export const characterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  path: String,
  element: String,
  rarity: String,
  image: String,
  eidolons: [eidolonSchema],
});

export const Character = mongoose.model("Character", characterSchema);
