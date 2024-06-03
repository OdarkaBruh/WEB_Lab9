const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product_model.js");
const productRoute = require("./routers/product_route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.oiaqqk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });