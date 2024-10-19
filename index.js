import express from "express";
import "dotenv/config";
import cors from "cors";

import { allRoutes } from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

// using json-data in our application
app.use(express.json());

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => res.send("HSR API WORKED"));

app.use("/characters", allRoutes.characterRoutes);
app.use("/paths", allRoutes.pathsRoutes);
app.use("/elements", allRoutes.elementsRoutes);
app.use("/relics", allRoutes.relicsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
