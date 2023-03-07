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


  } else {



  }
})

function validateEmail(email) {



  return true;
}





app.listen(3000, () => {
  console.log('server started');
});
