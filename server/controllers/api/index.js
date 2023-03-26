const router = require('express').Router();
const emailRoutes = require('./email-routes');


router.use('/email', emailRoutes);

module.exports = router;
