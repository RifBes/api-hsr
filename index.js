import express from "express";
// import bodyParser from "body-parser";
import "dotenv/config";

import characterRoutes from "./routes/characters.js";

const app = express();

const PORT = process.env.PORT || 5000;

// using json-data in our application
app.use(express.json());

app.use("/characters", characterRoutes);

app.get("/", (req, res) => res.send("HSR API WORKED"));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
