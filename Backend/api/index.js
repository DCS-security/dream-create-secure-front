const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
// const contactRoutes = require('./routes/contact');
const PORT = process.env.PORT || 5000;
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
app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
module.exports = app;

