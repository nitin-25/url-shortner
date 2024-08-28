
const {getCookie} = require("../services/auth")
async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;
    //console.log(userUid)
    if (!userUid) return res.redirect("/login");
    const user = getCookie(userUid);
    console.log(user);
    if (!user) return res.redirect("/login");
  
    req.user = user;
    next();
  }

  async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;
    const user = getCookie(userUid);

    req.user = user;
    next();
  }
module.exports = {restrictToLoggedinUserOnly,checkAuth}