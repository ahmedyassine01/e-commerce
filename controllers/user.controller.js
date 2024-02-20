const User = require("../modules/user");
const bc = require("bcrypt");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, res) => {
  const { fullName, email, password, phone } = req.body;
  try {
    const exestingUser = await User.findOne({ email });
    if (exestingUser) {
      throw new Error("email is already used");
    } else {
      const newUser = User({
        fullName,
        email,
        password,
        phone,
      });
      var salt = await bc.genSalt(10);
      var hash = await bc.hashSync(password, salt);
      newUser.password = hash;
      await newUser.save();
      const payload = {
        _id: newUser._id,
        email: newUser.email,
        fullName: newUser.fullName,
        phone: newUser.phone,
      };
      const token = jwt.sign(payload, secret);
      res.status(201).send({
        token,
        user: {
          _id: newUser._id,
          email: newUser.email,
          fullName: newUser.fullName,
          phone: newUser.phone,
          password: newUser.password,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    // verify email
    if (!user) {
      return res.status(422).json({ msg: "invalid email or password" });
    }
    const isMatch = await bc.compare(password, user.password);
    if (!isMatch) {
      return res.status(422).json({ msg: "invalid email or password" });
    }
    const payload = {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
    };
    const token = jwt.sign(payload, secret);
    res.status(200).send({
      token,
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
        phone: user.phone,
        password: user.password,
      },
    });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getUser = (req, res) => {
  res.send(req.user);
};