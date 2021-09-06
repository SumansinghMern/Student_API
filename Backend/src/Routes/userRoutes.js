const express = require('express');
// const userData = require('../models/usersModel');
const apiRouter = express.Router();
const {addUser,getUsers,getUserById,deleteUserById,updateUser} = require('../controllers/userController')

apiRouter.post('/add_user', addUser);
apiRouter.get('/users',getUsers);
apiRouter.get('/user/:id',getUserById);
apiRouter.delete('/delete_user/:id',deleteUserById);
apiRouter.patch('/update_user/:id',updateUser);

module.exports = apiRouter;