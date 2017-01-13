const express = require('express');
const router = require('express').Router();
const rank = require('./rank/rank.js');
const player = require('/playerController/playerCtrl.js')
// router.get('/getMaster', function( req, res ){
//   res.send(res.body)
// });
router.get('/getMaster', rank.getMaster );
router.get('/getChallenger', rank.getChallenger );

router.get('/getSummoner', player.getSummoner);
module.exports = router;
