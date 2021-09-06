// const userData = require('../models/usersModel');
// const mongoose = require('mongoose');
const Users = require('../models/usersModel')

const addUserQuery = (data) => new Promise((resolve, reject) => {

    Users.create(data)
        .then((doc) => {
            resolve(doc)
        }).catch((error) => reject(error));

})

const checkMobileExistQuery = (phone) => new Promise((resolve, reject) => {

    Users.find({ phone: phone })
        .then((doc) => {
            resolve(doc)
        }).catch((error) => reject(error))

})

const getUsersQuery = (query) => new Promise((resolve,reject) => {
    Users.find(query)
        .then((doc) => {
            resolve(doc)
        }).catch((error) => reject(error))
}) 

const getUserByIdQuery = (id) => new Promise((resolve,reject) => {
    Users.find({'_id' : id})
        .then((doc) => {
            resolve(doc);
        }).catch((error) => reject(error));
})

const deleteUserByIdQuery = (id) => new Promise((resolve,reject) => {
    Users.findByIdAndDelete(id)
        .then((doc) => {
            resolve(doc);
        }).catch((error) => reject)
});

const updateUserByIdQuery = (id,update) => new Promise((resolve,reject) => {
    Users.findByIdAndUpdate(id,update,{upsert:true,setDefaultsOnInsert: true,new:true})
        .then((doc) => {
            resolve(doc);
        }).catch((error) => reject(error));
});

module.exports = {
     addUserQuery,
     getUsersQuery,
     getUserByIdQuery,
     deleteUserByIdQuery,
     updateUserByIdQuery,
     checkMobileExistQuery 
};