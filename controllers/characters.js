import fs from "fs";
import path from "path";
import { dataDirectory } from "../config.js";

const characters = fs.readFileSync(
  path.join(dataDirectory, "characters.json"),
  "utf8"
);
const charactersData = JSON.parse(characters);

export const getCharacter = (req, res) => {
  res.send(charactersData);
};

export const getCharacterByID = (req, res) => {
  const { id } = req.params;
  const characterByID = charactersData.find((character) => character.id === id);
  res.send(characterByID);
};
