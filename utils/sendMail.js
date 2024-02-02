const nodemailer = require('nodemailer');
require('dotenv').config();

// xyqboxyglbusldau

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
});

const fromEmail = process.env.SMTP_USERNAME;
sendMail = async (to,  msg, subject = 'Contact us') => {
    try{
        console.log(transporter);
        const mailOptions = {
            from: fromEmail,
            to: to,
            subject: subject,
            html: msg
        }
        const info = await transporter.sendMail(mailOptions);
        // console.log(info);
        return true;
    }
    catch(e) {
        throw e;
    }
}

module.exports = {
    sendMail
};