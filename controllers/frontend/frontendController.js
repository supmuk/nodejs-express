const User = require('../../models/user');
const {sendMail} = require('../../utils/sendMail');
const home = (req, res) => {
    res.render('../views/frontend/index.ejs');
}

const about = (req, res) => {
    res.render('../views/frontend/about.ejs');
}

const contact = (req, res) => {
    res.render('../views/frontend/contact.ejs');
}

const login = (req, res) => {
    res.render('../views/frontend/login.ejs');
}

const registration = (req, res) => {
    res.render('../views/frontend/registration.ejs');
}

const userRegistration = async (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);

    // const newUser = new User({name, email, password})
    // await newUser.save();

}

const sendMailToUser = async (req, res) => {
    const {name, email, message} = req.body;
    const response = sendMail(email, message);
    console.log('response -> ', response);
    if( response ) {
        res.redirect('/contact');
    }
}

module.exports = {home, about, contact, login, registration, userRegistration, sendMailToUser}