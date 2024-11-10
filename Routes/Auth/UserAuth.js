const express = require("express");
const User = require("../../Models/User");
const router = express.Router();


// SignUp TODO: need to add jwt and encryption for password 

router.post("/signup", async (req, res) => {
  const {
    name,
    mobile_number,
    email,
    password,
    address,
    pincode,
    district,
    city,
    emergency_number,
  } = req.body;
  console.log("helloj");
  
  try {
    if (
      name &&
      mobile_number &&
      email &&
      password &&
      address &&
      pincode &&
      district &&
      city &&
      emergency_number
    ) {
      const check_email = await User.find({ email });
      const check_mobile_number = await User.find({ mobile_number });
      if (!check_email && !check_mobile_number) {
        const user = await User.create({
          name,
          mobile_number,
          email,
          password,
          address,
          pincode,
          district,
          city,
          emergency_number,
        });
        console.log("====================================");
        console.log(user);
        console.log("====================================");

        return res
          .status(200)
          .json({ update: true, message: "Signup successfull" });
      }
    } else {
      return res
        .status(400)
        .json({ update: false, message: "Please fill all the fields" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ update: false, message: "Error Occured Please try Again" });
  }
});


// Login need to add hashable checking in the password and need to generate jwt and also need to send it in the front end

router.post("/login", async (req, res) => {
  const { mobile_number, password } = req.body;
  try {
    if (mobile_number && password) {
      const checkuser = await User.findOne({ mobile_number });
      if (checkuser) {
        if (checkuser.password === password) {
          return res
            .status(200)
            .json({ update: true, message: "Login Successfull" });
        } else {
          return res.status(401).json({
            update: false,
            message: "Please check mobile number and password again try again",
          });
        }
      } else {
        return res
          .status(400)
          .json({ update: false, message: "User not found please signup" });
      }
    }
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ update: false, message: "Error occured Please try Again" });
  }
});

module.exports = router;
