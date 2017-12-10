/**
 * Create express REST api server
 */

const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');

/**
 * 
 */
class middleware{

    constructor() {

    }

    static init(app) {

        return new Promise((resolve, reject) => {
            
            app.engine('html', require('ejs').renderFile);
            app.set('view engine', 'html');
            app.set('view option', { laylut: false });
            app.use(logger('dev'));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(helmet());
            app.use(helmet.noCache())
            app.use(helmet.frameguard());
            resolve(true);
        }).catch((error)=>{
            reject(error);
        });
    }
}

module.exports = middleware;

