const express = require('express');
const { route } = require('../../app');
const router = express.Router();


router.get('/', (request, response) => {
  response.json({ message: 'message' });
})

module.exports = router;