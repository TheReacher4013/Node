const express = require ('express');
const { signup } = require('../controllers/user.controller');
const router = express.Router();


router.post("/register", signup);

module.exports = router;