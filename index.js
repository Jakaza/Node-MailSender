const express = require('express');
const bodyParser = require('body-parser')
const userEmail = process.env['userEmail']
const userPass = process.env['userPass']

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.post('/sendemail', (req, res) => {

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

  let info = transporter.sendMail({
    from: email,
    to: "goodnessjakazac@gmail.com, germanwise10@gmail.com", 
    subject: subject,
    text: content,
    html: `<p> ${content} </p>`// html body
  });

    res.status(200).json({
      messageId : info.messageId,
      message: 'success'
    })

  } else {



  }
})

function validateEmail(email) {



  return true;
}





app.listen(3000, () => {
  console.log('server started');
});
