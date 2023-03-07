const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')
const userEmail = process.env['userEmail']
const userPass = process.env['userPass']

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.post('/sendemail', async (req, res) => {

  const email = req.body.email;
  const subject = req.body.subject;
  const content = req.body.content;

  if (validateEmail(email)) {

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: userEmail,
        pass: userPass
      },
    });

    let info = await transporter.sendMail({
      from: email,
      to: "goodnessjakazac@gmail.com",
      subject: subject,
      text: content,
      html: `<p> ${content} </p>`// html body
    });

    res.status(200).json({
      messageId: info.messageId,
      message: 'success'
    })

    let reply = await transporter.sendMail({
      from: "goodnessjakazac@gmail.com",
      to: email,
      subject: "Thanks Got Your Email",
      text: "I will get back to you some",
      html: `<p> Hi,  ${email}, i will get back to you soon.</p> <br> <h3> Thanks for mailing me. </h3>`// html body
    });




  } else {



  }
})

function validateEmail(email) {



  return true;
}





app.listen(3000, () => {
  console.log('server started');
});
