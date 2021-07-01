const nodemailer = require("nodemailer");
var config = require('../config');

const user = config.auth.user;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: user,
        pass: config.auth.pass
    }
});

class Email {
    static async send(error = false) {
        console.log(`Sending email ${error ? "error alert" : "alert"}...`);

        transporter.sendMail({
            to: user,
            from: user,
            subject: error ? "Scraper Error" : "Upcoming Hackathons",
            attachments: [
                {
                    filename: 'hackathons.json',
                    path: '../server/hackathons.json'
                }
            ]
        });

        console.log(`Alert sent successfully.`);
    }
}

module.exports = Email;