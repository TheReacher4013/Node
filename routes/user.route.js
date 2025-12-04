const express = require ('express');
const { signup, signin } = require('../controllers/user.controller');
const router = express.Router();


router.post("/register", signup);
router.post("/signin", signin);

module.exports = router;