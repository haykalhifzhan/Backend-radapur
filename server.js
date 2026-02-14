require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const recipeRoutes = require("./routes/recipe.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(
  "/images",
  express.static(path.join(__dirname, "images"))
);

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

module.exports = app;
