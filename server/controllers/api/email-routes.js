const router = require('express').Router();
const {sendmail} = require('../../controllers/email-controller');

router.route('/sendmail').post(sendmail);


module.exports = router;
