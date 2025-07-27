const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
// const contactRoutes = require('./routes/contact');

const app = express();


app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
// Route for contact form
// app.use('/api/contact', contactRoutes);
app.use("/api/contact", require("./routes/contact"));
module.exports = app;

