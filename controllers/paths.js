import fs from "fs";
import path from "path";
import { dataDirectory } from "../config.js";

const paths = fs.readFileSync(path.join(dataDirectory, "paths.json"), "utf8");
const pathsData = JSON.parse(paths);

export const getPaths = (req, res) => {
  res.send(pathsData);
};
