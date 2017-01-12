const express = require('express');
const router = require('express').Router();
const rank = require('./rank/rank.js');

// router.get('/getMaster', function( req, res ){
//   res.send(res.body)
// });
router.get('/getMaster', rank.getMaster )
router.get('/getChallenger', rank.getChallenger );

module.exports = router;
