const cookieMap = new Map();

function setCookie(id,user){
    cookieMap.set(id,user);
}
function getCookie(id){
   return cookieMap.get(id);
}

module.exports = {
    setCookie,
    getCookie,
}