const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');

const getSummoner = ( req, res, next ) => {

  //Riot Games API Address
  const urlNA = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/58786873/summary?season=SEASON2016&api_key=" + config.api.key;
  request( urlNA, ( error, response, body ){
    if( !error && response.statusCode == 200 ){
      res.send( JSON.parse( body ) )
    }
  })
}

module.exports = {
  getSummoner: getSummoner
}
