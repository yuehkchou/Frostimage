import router from 'express';
import config from '../config';
// import ctrl from 'controllers';

const getMaster( req, res, next ){

  // Riot Games API Address
  const url = "https://na.api.pvp.net/api/lol/na/v2.5/league/master" +
  config.api.key

  // Get Master Tier Requests
  router.get( '/mastertier', ( req, res ) => {
    console.log("you reached Master Tier", res.body )
    if( !error && res.statusCode === 200 ){
      res.json( { res.body } )
    }
  } )
}
// Get Challenger Tier Requests
const getChallener( req, res, next ){
  const url = "https://na.api.pvp.net/api/lol/na/v2.5/league/challenger"
  router.get( '/challengerTier', ( req, res ) => {
    console.log("you reached Challenger Tier", res.body )
    if( !error && res.statusCode === 200 ){
      res.json( { res.body } )
    }
  } )
}

module.exports = {
  getMaster: getMaster
}
