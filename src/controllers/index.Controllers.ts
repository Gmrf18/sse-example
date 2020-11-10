import { Router } from 'express'
import { Request, Response } from 'express'


class IndexControllers {

    public router: Router = Router()

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', (req, res) => { res.send("Hola mundo") })
        this.router.get('/sse', this.index)
    }

    index(req: Request, res: Response) {
        res.set('Content-Type', "text/event-stream")
        res.set('Connection', "keep-alive")
        res.set('Cache-Control', "no-cache")
        res.write("data: holas")
        res.write("data: mundo")
    }

}

export const IndexControllersService = new IndexControllers().router