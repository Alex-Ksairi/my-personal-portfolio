const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact', (request, response) => {
    let data = request.body;
    let smtpTransport = nodemailer.createTransport({
        service: process.env.SERVICE,
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: data.email,
        to: process.env.EMAIL,
        subject: data.subject,
        text: data.message
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if (error) {
            response.send(error);
            // console.log(error);
        }
        else {
            response.send('Email was successfully sent. Thank you!');
            // console.log('Email success!');
        }
    });

    smtpTransport.close();
});

module.exports = router;