const { name } = require("ejs");
const express = require("express");
const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        unique : true,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
});

const User = mongoose.model('user',user);
module.exports = User;

