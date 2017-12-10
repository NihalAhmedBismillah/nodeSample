/**
 * Import npm packages
 */

 /**
  * Description : productController1
  */
  class productController1 {
    
        static init(app) {
    
            return new Promise((res, rej) => {
    
                app.get('/product', (req, res) => {
    
                    res.send({ product: 'product',action:'get' })
                })
    
                app.put('/product/id', (req, res) => {
    
                    res.send({ product: 'product',action:'put' })
                });
    
                res(true);
    
            }).catch((err)=>{
                rej(err);
            })
        }
    }
    
    module.exports = productController1;