const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortUrl(req,res ){
    const body = req.body;
    console.log(body.url);
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }
     const shortId = shortid();

     await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : [],
     });
     return res.json({id : shortId});
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