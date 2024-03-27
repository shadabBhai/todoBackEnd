const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

// import routes for TODO API

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started sucessfully at ${PORT}`);
});

// CONNECT TO  THE DATABASE
const dbConnect = require("./config/dataBase");
dbConnect();

//dafult route

app.get("/", (req, res) => {
  res.send(`<h1> Back End  is doing well </h1>`);
});
