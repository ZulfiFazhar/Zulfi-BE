const userService = require("../services/userService");

async function createUser(req, res) {
  try {
    console.log(req.body);
    const { email, firstName, lastName } = req.body;

    const response = await userService.createUser(email, firstName, lastName);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message);
  }
}

async function getAllUsers(req, res) {
  try {
    console.log(req.body);
    const response = await userService.getAllUsers();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}

async function getUserById(req, res) {
  try {
    const response = await userService.getUserById(req.params.id);
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
}

async function updateUserById(req, res) {
  try {
    console.log(req.body);
    const response = await userService.updateUserById(req.body.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}

async function deleteUserById(req, res) {
  try {
    console.log(req.body);
    const response = await userService.deleteUserById(req.params.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
