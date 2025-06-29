import express from "express";
import "dotenv/config";
import cors from "cors";

import { allRoutes } from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

// using json-data in our application
app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/api/characters", allRoutes.characterRoutes);
app.use("/api/paths", allRoutes.pathsRoutes);
app.use("/api/elements", allRoutes.elementsRoutes);
app.use("/api/relics", allRoutes.relicsRoutes);
app.use("/api/cones", allRoutes.conesRoutes);

app.get("/test", (req, res) => {
  res.json({ simple: "test" });
});

app.get("/", (req, res) => res.send("HSR API WORKED"));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

export default app;
