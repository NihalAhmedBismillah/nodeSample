/**
 * Import npm packages
 */
const nconf = require('nconf');
const express = require('express');
const middleware  = require('./middleware/middleware');
const mongodb  = require('./db/mongodb');
const registerControllers  = require('./utility/registerControllers');

let app  = express();

nconf.argv()
.env()
.file({ file: './config.json' });

/**
 * Description : This class use for starting app 
 */
class App {

   static run() {

        return new Promise((resolve, reject) => {

              mongodb.connectMongoDb(nconf).then(()=>{
                 return  middleware.init(app);
              }).then((data)=>{
                 return  registerControllers.init(app);
              }).then((data)=>{
                  resolve(true);
              }).catch((error)=>{
                  reject(error);
              })
        }).then((data)=>{

        })
        
    }
}
app.listen(8080);
// start server 
App.run().then(()=>{
    console.log(`server started at port no : ${nconf.get('PORT')}`);
}).catch((err)=>{ 
    console.log(`Something went wrong !!${err}`); 
});
