const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');
// import ctrl from 'controllers';

const getMaster = ( req, res, next ) => {

  // Riot Games API Address
  const urlNA = "https://na.api.pvp.net/api/lol/na/v2.5/league/master?type=RANKED_FLEX_SR&api_key=" + config.api.key;

  // Get Master Tier Requests
  request( { url: urlNA }, ( error, response, body ) => {
    console.log("you reached Master Tier")
    if( !error && response.statusCode == 200 ){
      res.send( JSON.parse( body ) )
      next();
    } else {
      console.log( error )
    }
  } )
}
// Get Challenger Tier Requests
const getChallenger = ( req, res, next ) => {
  const urlNA = "https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_FLEX_SR&api_key=" + config.api.key;

  // Get Challenger Tier Requests
  request( { url: urlNA }, ( error, response, body ) => {
    console.log("you reached Challenger Tier")
    if( !error && response.statusCode == 200 ){
      res.send( JSON.parse( body ) )
      next();
    }
  } )
}

module.exports = {
  getMaster: getMaster,
  getChallenger: getChallenger
}
