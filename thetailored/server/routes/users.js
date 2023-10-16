const express = require('express');
const UsersSchema = require('../models/users');

const router = express.Router();

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