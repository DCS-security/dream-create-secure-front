const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact
router.post("/", async (req, res) => {
  const {
    name,
    organizationName,
    email,
    phoneNumber,
    message
  } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields (Name, Email, Message)."
    });
  }

  try {
    const newContact = new Contact({
      name,
      organizationName,
      email,
      phoneNumber,
      message
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Your message has been received. We'll get back to you shortly."
    });
  } catch (error) {
    console.error("Error saving contact form:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
});

module.exports = router;
