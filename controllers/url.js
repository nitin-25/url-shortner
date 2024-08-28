const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortUrl(req,res ){
    const body = req.body;
    //console.log(body.url);
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }
    const shortID = shortid();
    console.log(shortID);
     await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : [],
        createdBy: req.user._id,
     });
    return res.render("home", {id : shortID,});
   //return res.json({id : shortID});
}

async function handleGrtAnalitics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totleClicks : result.visitHistory.length,
        Analitics : result.visitHistory,
    });
}

module.exports = {handleGenerateNewShortUrl,handleGrtAnalitics,};