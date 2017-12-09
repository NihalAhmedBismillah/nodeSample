

//const config = require('./../config.json');
const MongoClient = require('mongodb').MongoClient;
 class monogDb{

   constructor(){
   }

   connectDb(){

     return new Promise((res,rej)=>{

      MongoClient.connect('mongodb://127.0.0.1:27017/' + 'service1', (err, db) => {         
              if (err) {
                console.log('Database connection error occur!', JSON.stringify(err));
                //throw new (Error(err));
                setTimeout(()=> {
                    this.connectDb();
                }, 10000);
              }
              else {
                    console.log('Database connection ok!');
                    let locator = new Map();
                     locator.set('database',db);
                    global['locator'] = locator;
                    res(true);
              }
            });
     });
   }

}

module.exports  = monogDb;

