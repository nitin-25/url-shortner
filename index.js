//console.log("hii");
require("dotenv").config();
const express = require("express");
const {connectToMongoDb} = require("./connection");
const URL = require("./models/url");

const path = require("path");

const app = express();
connectToMongoDb(process.env.DB_URI)
.then(() => console.log("connected!!"));

app.set("view engine", "ejs");

//app.set("views",path.resolve("./views")); //by default express use views file as templte if you want to use other file name then you can use this middleeare

//routes
const staticRoute = require("./routes/staticRouter");
const urlRoutes = require('./routes/url');
const userRouter = require('./routes/user');


// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/url', urlRoutes);
app.use("/user", userRouter);
app.use("/",staticRoute);
const port = process.env.PORT ||4000;

app.get("/url/:shortId",async(req, res) => {
        const shortId = req.params.shortId;
        console.log(shortId);
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
