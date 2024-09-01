//const cookieMap = new Map();
//using jwt 
//const { name } = require("ejs");
const jwt = require("jsonwebtoken")
const secretKey = "@Ni3tiwari";
function setCookie(user){
    //cookieMap.set(id,user);
    const payload = {
        _id : user.id,
        name : user.email,
    }

    return jwt.sign(payload,secretKey);

}
function getCookie(token){
    if(!token) return null;
   return jwt.verify(token,secretKey);                     //cookieMap.get(id);
}

module.exports = {
    setCookie,
    getCookie,
}