//console.log("hii");
require("dotenv").config();
const express = require("express");
const {connectToMongoDb} = require("./connection");
const URL = require("./models/url");

const urlRoutes = require('./routes/url');

const app = express();
connectToMongoDb()
.then(() => console.log("connected!!"));

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/url', urlRoutes);
const port = process.env.PORT ||4000;

app.get("/:shortId",async(req, res) => {
        const shortId = req.params.shortId;
       const entry =  await URL.findOneAndUpdate(
            {
                shortId,
            },
            {
                $push :{
                    visitHistory : {
                        timeStamp : Date.now(),
                    },
                },
            }
        );
        res.redirect(entry.redirectUrl);
});

app.listen(port,()=> {
    console.log(`Server is running on port No: ${port}`)
});
