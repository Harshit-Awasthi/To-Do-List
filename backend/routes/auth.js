const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Sign-UP

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body; 

        const hashpassword= bcrypt.hashSync(password);

        const existingUser = await User.findOne({ email }); // Check if user already exists
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ email, username, password: hashpassword });

        await user.save();
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" }); // Generic error response
    }
});


//Sign-IN



module.exports = router;
