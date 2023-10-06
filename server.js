const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/connection");
const userRoutes = require("./route/api/userroute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ADD routes
app.use("/api/users", userRoutes);

db.once("open", () => {
  app.listen(3000, () => {
    console.log(`API server running on port 3000!`);
  });
});
