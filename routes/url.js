const express = require("express");
const {handleGenerateNewShortUrl, handleGrtAnalitics} = require('../controllers/url');
const router = express.Router();

router.post("/",handleGenerateNewShortUrl);

router.get("/analytics/:shortId", handleGrtAnalitics);

module.exports = router;