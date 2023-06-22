const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeroutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);

router.use((req, res) =>{
  res.status(404).end();
});

module.exports = router;