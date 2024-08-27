const User = require("../models/user");

async function handleUserSignup(req, res) {
    const {name , email, password } = req.body;
    User.create({
        name, 
        email,
        password,
    });
    return res.redirect("/");
}
async function handleUserLogin(req, res) {
    const {email, password } = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    if(!user){
        return res.render("logIn", {
            error : "Invailid userName or Password"
        })
    }
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};