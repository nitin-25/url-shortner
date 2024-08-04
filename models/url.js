const { timeStamp } = require("console");
// { url } = require("inspector");
const mongoose = require("mongoose");
const { type } = require("os");
const { short } = require("webidl-conversions");

const userSchema = new mongoose.Schema(
    {
        shortId : {
            type : String,
            require : true,
            unique : true,
        },
        redirectUrl : {
            type : String,
            require : true,
        },
        visitHistory : [{timeStamp : {type : Number,} }],
    },
        {
            timeStamps : true,
        },
    );

const URL = mongoose.model('url',userSchema);

module.exports = URL;


