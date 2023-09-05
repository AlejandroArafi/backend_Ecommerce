const mongoose = require("mongoose");
const generateToken = require("../helpers/generateToken");
const User = mongoose.model("User");

const signup = async (req, res) => {
    const {username, password, mail} = req.body
    const emailLowerCase = mail.toLowerCase()
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(!regexPassword.test(password)){
        return res.status(401).json({
            message:'Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter'
        })
    }

    const hashedPassword=hashPassword(password)

    try {
    const user = new User(req.body);
    const resp = await user.save();
    const token = generateToken(resp)
    return res.status(201).json({
      message: "User created",
      token
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
      detail: err,
    });
  }
};
const getUsers = async (req, res) => {
  try {
    const resp = await User.find();
    return res.status(200).json({
      message: "ok",
      detail: resp,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
      detail: err,
    });
  }
};

const updateUser = async (req, res) => {
  const { _id, userUpdated } = req.body;
  try {
    const resp = await User.findByIdAndUpdate(_id, userUpdated, { new: true });
    return res.status(200).json({
      message: "ok",
      detail: resp,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
      detail: err,
    });
  }
};

const deleteUser = async () => {
  const { _id } = req.body;
  try {
    const resp = await User.findByIdAndDelete(_id);
    return res.status(200).json({
      message: "ok",
      detail: resp,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      detail: err,
    });
  }
};

module.exports = {
  signup,
  getUsers,
  updateUser,
  deleteUser,
};
