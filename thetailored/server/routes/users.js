const router = require('express').Router();
const {UsersSchema, validate} = require('../models/users');
const bcrypt = require("bcrypt");

router.post("/", async (req, res) =>{
  try{
    const {error} = validate(req.body);
    if(error)
      return res.status(400).send({message:error.details[0].message});

    const user = await UsersSchema.findOne({email: req.body.email});
    if (user)
      return res.status(409).send({message:"User with given email already exists!"});

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body,password: hashPassword}).save();
    res.status(201).send({message: "User created successfully"})
  } catch (error) {
    res.status(500).send({message:"Internal Server Error"})
  }
})

//Create user
router.post('/api/user/', async(req, res) => {
  try {
      const users = new UsersSchema({ ...req.body});
      await users.save();
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: error.message});
  }
});

//Read All
router.get('/api/user/', async(req, res) => {
  const findUsers = await UsersSchema.find();
  res.json(findUsers)
});

//Read specific user
router.get('/api/user/:id', async(req, res) => {
  const findUsers = await UsersSchema.findById(req.params.id)
  res.json(findUsers)
})



//Update user
router.put('/api/user/:id', async(req, res) => {
  try {
      const {id} = req.params;
      await UsersSchema.findByIdAndUpdate(id, req.body);
      res.json({message: 'Clothing updated successfully'});
  } catch (error) {
      res.status(500).json({ error: error.message});
  }
});

//Delete a user
router.delete('/api/user/:id', async(req, res) => {
  try {
      const {id} = req.params;
      await UsersSchema.findByIdAndDelete(id);
      res.json({message: 'Shoe deleted successfully'});
  } catch (error) {
      res.status(500).json({error: error.message});
  }
});



module.exports = router;