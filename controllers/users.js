const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');


const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ msh: "User does not exist." })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msh: "Invalid password" })

		const accesstoken = createAccessToken({ id: user._id })
        const refreshtoken = createRefreshToken({ id: user._id })

		res.json({ accesstoken, msg: "Logged in"})

	}
	catch {
        return res.status(500).json({ msg: err.message })
	}
};


const logout = (req, res) => {
	req.logout();
	req.session.destroy();
	res.send({ msg: "Successfully logged out" });
};

const register = async (req, res) => {
	const { email, username, password } = req.body;
	await User.findOne({ username }, async (err, doc) => {
		if (err) throw err;
		if (doc) res.send({ msg: "User already exists" });
		if (!doc) {
			const hashedPassword = await bcrypt.hash(password, 10);
			if (username === "admin") {
				const newUser = new User({
					_id: new mongoose.Types.ObjectId(),
					username: username,
					password: hashedPassword,
					cart: { items: [], total_price: 0 },
					isAdmin: true,
				});
				await newUser.save();
				res.send({ msg: "User created" });
			} else {
				const newUser = new User({
					_id: new mongoose.Types.ObjectId(),
					username: username,
					password: hashedPassword,
					cart: { items: [], total_price: 0 },
					isAdmin: false,
				});
				await newUser.save();
				res.send({ msg: "User created" });
			}
		}
	});
};

const checkUser = async (req, res) => {
	// FOR DEV PURPOSES UNCOMMENT THESE 2 LINES.
	// req.session.user = "6087ad243c08e30df7a0c0c5"; //THIS IS THE ADMIN ID
	// req.session.isAdmin = true;

	// FOR DEV PURPOSES ONLY, THIS IS THE 'test' USER ID
	// req.session.user = "6087ad273c08e30df7a0c0c7";
	// const user = await User.findById(req.user.id).select('-password')

	const userId = req.session.user;
	console.log(userId)
	if (userId) {
		User.findById({ _id: userId })
			.populate("transactions")
			.exec((err, user) => {
				if (err) res.send({ msg: "Error in populating transactions" });
				else if (user) {
					res.send({ msg: "You are logged in", user: user });
				}
			});
	} else {
		res.send({ msg: "No user logged in" });
	}
};

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}
const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

const userCtrl = {
    login,
	checkUser,
	logout,
	register
}

module.exports = userCtrl