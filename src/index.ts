import express, { Application } from 'express';
import { IndexControllersService } from './controllers/index.Controllers';

class Server {
    public app: Application = express()

    constructor() {
        this.config()
        this.controllers()
    }

    config(): void {

        this.app.set('port', process.env.PORT || 3001)
        this.app.use(express.json())
    }

    controllers(): void {
        this.app.use(IndexControllersService)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Sirviendo en el puerto ${this.app.get('port')}`);

        })
    }

}
const server = new Server()
server.start()
