const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/", async(req, res) => {
    const allurls = await URL.find();
  return res.render("home", {
    urls: allurls,
  });
    //return res.render("home");
});

router.get("/signup", (req, res) => {
    res.render("signUp");
})
router.get("/login", (req, res) => {
    res.render("logIn");
})

module.exports = router;