const Controller1 = require('./serviceControllers/Controller1');
const mongodb = require('./dbOperation/mongodb');
const ExpressApp = require('./setUpApp/ExpressApp');

class App {

    constructor() {

    }

    init() {

        return new Promise((res, rej) => {
            let objExpress = new ExpressApp();
            let objMongodb = new mongodb();
            const promises = [objExpress.initApp(), objMongodb.connectDb()];
            Promise.all(promises).then(() => {
                res(true);
            })
        })

    }

}
let objApp = new App();
objApp.init().then(() => {
    console.log('service 1 started !')
})