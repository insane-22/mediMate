import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import doctorModel from "../models/doctorModel.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "phone is required" });
    }
    if (!address) {
      return res.send({ message: "address is required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(200).send({
        success: false,
        message: "Already Registered! Login to continue",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      password: hashedPassword,
      phone,
      address,
      email,
    }).save();
    res.status(201).send({
      success: true,
      message: "Registration successful!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

export const registerDoctorController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      hospitalAddress,
      specialisation,
      availability,
    } = req.body;

    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }
    if (!hospitalAddress) {
      return res.send({ message: "Address is required" });
    }
    if (!specialisation) {
      return res.send({ message: "Adding specialisation is required" });
    }
    if (!availability) {
      return res.send({ message: "Adding availability is required" });
    }

    const existingUser = await doctorModel.findOne({ email });
    if (existingUser) {
      res.status(200).send({
        success: false,
        message: "Already Registered! Login to continue",
      });
    }

    const hashedPassword = await hashPassword(password);
    const doctor = await new doctorModel({
      name,
      password: hashedPassword,
      phone,
      hospitalAddress,
      specialisation,
      availability,
      email,
    }).save();
    res.status(201).send({
      success: true,
      message: "Registration successful!",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send({
          success: false,
          message: "Invalid email or Password",
        });
      }

      let user;
      user = await userModel.findOne({ email });
      if (!user) {
        user = await doctorModel.findOne({ email });
          if (!user) {
            return res.status(404).send({
              success: false,
              message: "Email is not registered, Register to Continue",
            });
          }
      }

      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }

      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({
        success: true,
        message: "Login Successful",
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error",
        error,
      });
    }
};
