const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');

const getSummoner = ( req, res, next ) => {

  //Riot Games API Address
  const urlNA = "https://na.api.pvp.net/api/lol/na/v2.5/league/master?type=RANKED_FLEX_SR&api_key=" + config.api.key;
  request( urlNA, ( error, response, body ){
    if( !error && response.statusCode == 200 ){
      res.send( JSON.parse( body ) )
    }
  })
}
