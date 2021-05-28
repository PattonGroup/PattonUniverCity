require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sessionSecret = 'shhhh';


require("./config/database");

const registerRouter = require('./routes/registerUser')
const userRoutes = require("./routes/users.js");


//---------------------Middleware--------------------------------

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({ exposedHeaders: '*' }));
app.use(cookieParser());
app.use(express.json());
app.use(logger('dev'));
app.use(
	session({
		secret: sessionSecret,
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			maxAge: 3600000,
			sameSite: true,
		},
	})
);


//---------------------Routes--------------------------------


app.use('/api', registerRouter);
app.use("/user", userRoutes);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 5000 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 5000;
 
app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});