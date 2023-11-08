const router = require("express").Router();
const { User } = require("../models/users");
const Joi = require("joi");

router.post("/", async (req, res) => {
    try {
        const {error} = validate(req.body);
        if (error)
            return res.status(400).send({message: error.details[0].messgae});

        const user = await User.findOne({email: req.body.email});
        if (!user)
        return res.status(401).send({message:"Invalid Email or Password"});

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if(!validPassword)
        return res.status(401).send({messgae:"Invalid Email or Password"});

        const token = user.generateAuthToken();
        res.status(200).send({data: token, message: "Logged in successfully"})
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
})

const validate = (data) => {
    const Schema = Joi.object({
        email:Joi.string().email().req().label("Email"),
        password:Joi.string().email().req().label("Password"),
    });
    return Schema.validate(data);
}