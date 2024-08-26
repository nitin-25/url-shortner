const mongoose = require("mongoose");
require("dotenv").config();
async function connectToMongoDb(url){
    await mongoose.connect(url);
}

module.exports = {connectToMongoDb,};