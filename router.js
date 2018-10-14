const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get('/', (req, res) => {
    console.log("success");
});

module.exports = router;