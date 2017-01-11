import router from 'express';
// import ctrl from 'controllers';

const getMaster( req, res, next ){

  const url = "https://na.api.pvp.net//api/lol/na/v1.3/stats/by-summoner/{summonerId}/summary"
  router.get( '/mastertier', ( req, res ) => {
    console.log("you reached Master Tier", res.body )
    if( !error && res.statusCode === 200 ){
      res.send( { res.body } )
    }
  } )
}

router.get( '/challengerTier', ( req, res ) => {
  console.log("you reached Challenger Tier", res.body )
  if( !error && res.statusCode === 200 ){
    res.send( { res.body } )
  }
} )
