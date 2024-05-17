const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.get("/read/all", userController.getAllUsers);
router.get("/read/:id", userController.getUserById);
router.post("/update/", userController.updateUserById);
router.delete("/delete/:id", userController.deleteUserById);

module.exports = router;
