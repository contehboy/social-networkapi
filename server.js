const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ADD routes

mongoose.connect("mongodb://localhost:27017/socialnetwork");

mongoose.set("debug", true);

app.listen(3000, () => console.log("connected to port 3000"));
