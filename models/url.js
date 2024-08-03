const { timeStamp } = require("console");
const { url } = require("inspector");
const mongoose = require("mongoose");
const { type } = require("os");
const { short } = require("webidl-conversions");

const userSchema = new mongoose.schema(
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

const url = mongoose.model('url',userSchema);

module.exports = url;


