const express = require('express');
const { getDataFile } = require('../helper/getJSONdata');

const router = express.Router();

router.route('/:fileName')
    .get(getDataFile);

module.exports = router;