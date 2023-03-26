
const sgMail = require('@sendgrid/mail');

module.exports = {

  async sendmail(req, res) {

    sgMail.setApiKey('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');

    const msgData = {
      to: 'winglovework@gmail.com', // Change to your recipient
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
