import express from "express";
// import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import characterRoutes from "./routes/characters.js";
import pathsRoutes from "./routes/paths.js";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;

const MONGO_URL = process.env.MONGO_URL;

// using json-data in our application
app.use(express.json());

mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected");
  app.use(cors({ origin: "*" }));

  app.get("/", (req, res) => res.send("HSR API WORKED"));

  app.use("/characters", characterRoutes);
  app.use("/paths", pathsRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});

mongoose.connection.on("error", () => {
  console.log("Mongoose connection error: ", error);
});
