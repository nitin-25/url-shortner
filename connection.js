const mongoose = require("mongoose");
require("dotenv").config();
async function connectToMongoDb(){
    await mongoose.connect(process.env.DB_URI);
}

module.exports = {connectToMongoDb,};