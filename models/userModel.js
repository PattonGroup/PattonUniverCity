const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		min: 1,
		required: true,
	},
	fname:{
		type: String,
		min: 1,
		required:true,
	},
	lname:{
		type: String,
		min: 1,
		required:true,
	},
	fullname:{
		type: String,
		min: 1,
		required:true,
	},
	password: {
		type: String,
		required: true,
	},
	userChats:[
		{
			chatid: String,
			chatWith: String,
		}
	],	
	email: String,
	address: String,
	contactNum: String,
	isAdmin: Boolean,
	cart: Object,
	transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
});

// userSchema.virtual("transactions", {
// 	ref: "Transaction",
// 	localField: "_id",
// 	foreignField: "user",
// 	justOne: false,
// });
// userSchema.set("toObject", { virtuals: true });
// userSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", userSchema);

User.createIndexes()
module.exports = User
