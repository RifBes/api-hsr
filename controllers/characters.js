import mongoose from "mongoose";

import fs from "fs";
import path from "path";
import { dataDirectory } from "../config.js";
import { Character } from "../models/Characters.js";

const characters = fs.readFileSync(
  path.join(dataDirectory, "characters.json"),
  "utf8"
);
const charactersData = JSON.parse(characters);

export const getCharacter = async (req, res) => {
  try {
    const charactersDB = await Character.find();
    let { path, element, rarity } = req.query;
    // console.log(characters);
    const filterFn = (character) => {
      const conditions = [];
      if (path)
        conditions.push(character.path.toLowerCase() === path.toLowerCase());
      if (element)
        conditions.push(
          character.element.toLowerCase() === element.toLowerCase()
        );
      if (rarity)
        conditions.push(
          character.rarity.toLowerCase() === rarity.toLowerCase()
        );
      return conditions.every(Boolean);
    };
    const filteredCharacters = charactersDB.filter(filterFn);
    if (filteredCharacters.length > 0) {
      res.send(filteredCharacters);
    } else {
      res.status(404).send({ message: "Characters not found" });
    }

    // return res.status(200).json(characters);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "characters not found", error: error.message });
  }
  // let { path, element, rarity } = req.query;
  // const filterFn = (character) => {
  //   const conditions = [];
  //   if (path)
  //     conditions.push(character.path.toLowerCase() === path.toLowerCase());
  //   if (element)
  //     conditions.push(
  //       character.element.toLowerCase() === element.toLowerCase()
  //     );
  //   if (rarity)
  //     conditions.push(character.rarity.toLowerCase() === rarity.toLowerCase());
  //   return conditions.every(Boolean);
  // };
  // const filteredCharacters = charactersData.filter(filterFn);
  // if (filteredCharacters.length > 0) {
  //   res.send(filteredCharacters);
  // } else {
  //   res.status(404).send({ message: "Characters not found" });
  // }
};

export const getCharacterByID = async (req, res) => {
  try {
    const charactersDB = await Character.find();
    const { id } = req.params;
    let character = "";

    if (isNaN(id)) {
      character = charactersDB.find(
        (character) => character.name.toLowerCase() === id.toLowerCase()
      );
    } else {
      character = charactersDB.find((character) => character.id === id);
    }
    if (character) {
      res.send(character);
    } else {
      res.status(404).send({ message: "Character not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "characters not found", error: error.message });
  }
  // const { id } = req.params;
  // let character = "";

  // if (isNaN(id)) {
  //   character = charactersData.find(
  //     (character) => character.name.toLowerCase() === id.toLowerCase()
  //   );
  // } else {
  //   character = charactersData.find((character) => character.id === id);
  // }
  // if (character) {
  //   res.send(character);
  // } else {
  //   res.status(404).send({ message: "Character not found" });
  // }
};

export const getCharacterByName = async (req, res) => {
  try {
    const charactersDB = await Character.find();
    const { name } = req.params;

    const characterByName = charactersDB.find(
      (character) =>
        character.name.toLowerCase().replace(/\s+/g, "") === name.toLowerCase()
    );

    if (characterByName) {
      res.send(characterByName);
    } else {
      res.status(404).send({ message: "Character not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "characters not found", error: error.message });
  }
  // const { name } = req.params;

  // const characterByName = charactersData.find(
  //   (character) =>
  //     character.name.toLowerCase().replace(/\s+/g, "") === name.toLowerCase()
  // );

  // if (characterByName) {
  //   res.send(characterByName);
  // } else {
  //   res.status(404).send({ message: "Character not found" });
  // }
};
