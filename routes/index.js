// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import express from 'express';
const router = express.Router();

// GET /
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Microsoft Graph Notifications Sample' });
});

module.exports = router;
