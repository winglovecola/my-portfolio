
const sgMail = require('@sendgrid/mail');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}



module.exports = {

  async sendmail(req, res) {

    sgMail.setApiKey(process.env.SENDGRID_API);

    const msgData = {
      to: 'winglovecola@gmail.com', // Change to your recipient
      from: 'winglovework@gmail.com', // Change to your verified sender
      subject: 'Portfolio Contact',
      text: req.body.msg,
      html: `Email: ${req.body.email}<br><br>Name: ${req.body.name}<br><br>Message: ${req.body.msg}`,
    };
  
    await sgMail
      .send(msgData)
      .then((response) => {
        res.status(200).json({statusCode: response[0].statusCode, headers: response[0].headers});
        //console.log(response[0].statusCode);
        //console.log(response[0].headers);
      })
      .catch((error) => {
        
        res.status(500).json(error);
        //console.error(error);
      });
 
  },
  
};
