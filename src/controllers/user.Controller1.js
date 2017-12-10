/**
 * Import npm packages
 */

 /**
  * Description : userController1
  */
 class userController1 {

    static init(app) {

        return new Promise((res, rej) => {

            app.get('/', (req, res) => {
                res.send({server:'ok'});
            })
            app.get('/user', (req, res) => {

                res.send(`<!DOCTYPE html>
                <head>
                  <title>Welcome to User</title>
                </head>
                <body>
                  <div>Here I am from serve with user</div>
                </body>
              </html>`)
            })

            app.put('/user/id', (req, res) => {

                res.send({ user: 'user',action:'put' })
            })

            res(true);

        }).catch((err)=>{
            rej(err);
        })
    }
}

module.exports = userController1;