// const { response } = require('express');
// const userData = require('../models/usersModel');
const {
    addUserQuery,
    getUsersQuery,
    getUserByIdQuery,
    deleteUserByIdQuery,
    updateUserByIdQuery,
    checkMobileExistQuery
} = require('../modules/userModule');


const addUser = async (req, res) => {
    try {
        const checkNumber = await checkMobileExistQuery(req.body.phone);
        // console.log(!checkNumber.length);
        if (!checkNumber.length) {
            const result = await addUserQuery(req.body);
            console.log(result);
            res.send(result);
        } else {
            res.send("Number is already in Use");
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const getUsers = async (req, res) => {
    try {
        console.log(req.query);
        const result = await getUsersQuery(req.query);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const result = await getUserByIdQuery(req.params.id);
        console.log(result);
        if (result.length === 0) res.status(404).send("No Data Found");
        else res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const result = await deleteUserByIdQuery(req.params.id);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const result = await updateUserByIdQuery(req.params.id, req.body);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    addUser,
    getUsers,
    getUserById,
    deleteUserById,
    updateUser
}