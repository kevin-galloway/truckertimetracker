/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  cookie: {
    _expires: 365 * 24 * 60 * 60 * 1000
  },

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: '92ab6b503c1eefec77d80811ce720688',

  adapter: 'connect-mongo',
  url: 'mongodb://tttadmin:tttadmin123@trucker-shard-00-00.eelnw.mongodb.net:27017,trucker-shard-00-01.eelnw.mongodb.net:27017,trucker-shard-00-02.eelnw.mongodb.net:27017/test?ssl=true&replicaSet=atlas-1261zj-shard-0&authSource=admin&retryWrites=true&w=majority',
  //url: 'mongodb://tttadmin:tttadmin123@cluster0-shard-00-00-eelnw.mongodb.net:27017,cluster0-shard-00-01-eelnw.mongodb.net:27017,cluster0-shard-00-02-eelnw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  // url: 'mongodb://tttadmin:Livestrong33!@ds049558.mlab.com:49558/heroku_b9dvjdn3',
  collection: 'sessions',


  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
