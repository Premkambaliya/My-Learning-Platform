const express = require("express");
const router = express.Router();
const { signup, login, getMe } = require("../controllers/Authcontroller");
const authMiddleware = require("../middleware/authMiddleware");

// Register (Signup) Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);

// Get Current User Info (Protected route, optional)
router.get("/me", authMiddleware, getMe);

module.exports = router;
