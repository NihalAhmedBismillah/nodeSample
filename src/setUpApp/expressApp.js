/**
 * Create express REST api server
 */
let express = require('express'),
favicon = require('serve-favicon'),
logger = require('morgan'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
cookieParser = require('cookie-parser'),
cors = require('cors'),
jwt = require('jsonwebtoken');
//const config = require('./config.json');
const helmet = require('helmet');
let app = express();
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.set('view option', { laylut: false });
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(helmet.noCache())
  app.use(helmet.frameguard());
const Controller1 = require('./../serviceControllers/Controller1');

class ExpressApp {

      constructor(){
          
      }

       initApp(){

        return new Promise((resolve,rej)=>{
          
            app.listen(3000,'localhost');
            new Controller1(app).registerUrl().then(()=>{
                resolve(true);
            })
        })
      }
}

module.exports   = ExpressApp;

