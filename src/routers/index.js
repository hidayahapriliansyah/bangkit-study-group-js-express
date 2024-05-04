const { Router } = require('express');

const participantRouter = require('../api/participant/router');
const adminRouter = require('../api/admin/router');

const rootRouter = Router();

rootRouter.use('/participant', participantRouter);
rootRouter.use('/admin', adminRouter);

module.exports = rootRouter;
