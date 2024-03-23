"use strict";
const nodemailer = require("nodemailer");
const path = require("path"); require
const props = {
    "from": "App Jedi <appjedi.net@gmail.com>",
    "user": "appjedi.net@gmail.com",
    "pass": "dekxwtulmsryovls",
    "port": "465",
    "host": "smtp.gmail.com"
}
const transporter = nodemailer.createTransport({
    host: props.host,
    port: props.port,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: props.user,
        pass: props.pass,
    },
    attachments: [
        {
            filename: "test.pdf",
            path: path.join(__dirname, "test.pdf"),
            contentType: "application/pdf"
        }
    ]
});

// async..await is not allowed in global scope, must use a wrapper
async function main(mailOptions) {
    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}
const mailOptions = {
    from: "appjedi.net@gmail.com",
    to: "timlinr@outlook.com", // list of receivers
    subject: "Happy Friday", // Subject line
    text: "Have a Great Weekend!", // plain text body
    html: "<h1>Have a Great Weekend!</h1>", // html body
}
main(mailOptions).catch(console.error);