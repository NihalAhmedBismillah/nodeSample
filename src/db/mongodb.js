/**
 * Import npm packages
 */

//const config = require('./../config.json');
const MongoClient = require('mongodb').MongoClient;

/**
 * Description : This class user for monogdb connection and db operation
 */

class mongoDbOperation {

  /**
   * Description : connectMongoDb
   */
 static connectMongoDb(nconf) {

    return new Promise((res, rej) => {

     //MongoClient.connect(`${nconf.get('dbConnectionUrl')}${nconf.get('dbName')}`, (err, db) => {
      MongoClient.connect(`mongodb://127.0.0.1:27017/service1`, (err, db) => {

        if (err) {

          console.log('Database connection error occur!', JSON.stringify(err));
          //throw new (Error(err));
          setTimeout(() => {
            this.connectDb();
          }, 10000);
        }
        else {
          console.log('Database connection ok!');
          let locator = new Map();
          locator.set('database', db);
          global['locator'] = locator;
          res(true);
        }
      });
    });
  }

}

module.exports = mongoDbOperation;

