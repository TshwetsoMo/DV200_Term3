const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Joi =require("joi");
const passwordComplexity = require("joi-password-complexity")

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UsersSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this_id}.process.env.JWTPRIVATEKEY,{expiresin:"7d"})
    return token
};

const User = mongoose.model("user", UsersSchema);

const validate = (data) => {
    const Schema = Joi.object({
        fullName: Joi.string().required().label("Full Name"),
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return Schema.validate(data);
};

module.exports = ('users', UsersSchema);