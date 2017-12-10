/**
 * Import npm packages 
 */

const productController  = require('./../controllers/product.Controller1');
const userController  = require('./../controllers/user.Controller1');

/**
 * Description : Register all controllors.
 */
class registerControllers {

    constructor(){

    }
   
    // 
    static init(app){

           let promises = [] ;
           
           promises.push(productController.init(app));
           promises.push(userController.init(app));

           return new Promise((resolve,reject)=>{
              Promise.all(promises).then(()=>{
                  resolve(true);
              }).catch((error)=>{
                  reject(error);
              }
            )
           });
    }
}

module.exports = registerControllers;