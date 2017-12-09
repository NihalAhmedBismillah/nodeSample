

 class Controller1 {

    constructor(app) {
        this.app = app;
    }
    registerUrl() {

        return new Promise((res, rej) => {

            this.app.get('/user', (req, res) => {

                res.send({ user: 'user',action:'get' })
            })

            this.app.put('/user/id', (req, res) => {

                res.send({ user: 'user',action:'put' })
            })

            this.app.get('/',(req,res)=>{
              
                res.send('service started at post no: 3000 ');
        
            })
            res(true);

        })
    }
}

module.exports = Controller1;