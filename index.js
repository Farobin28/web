const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ticketRoute = require("./routes/tickets.route.js");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/ticket", ticketRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://artemfarobin:XV3djnoLNUC288vq@web.znxgdpw.mongodb.net/?retryWrites=true&w=majority&appName=Web"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
