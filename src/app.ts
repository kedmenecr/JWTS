import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers, port) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(this.loggerMiddleware);
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on the port ${this.port}`);
        });
    }

    public loggerMiddleware(request: express.Request, response: express.Response, next) {
        if (request.method === "GET" || request.method === "DELTE") {
            console.log(`${request.method} ${request.path}`);
            console.log({ Headers: request.headers });
        } else {
            console.log(`${request.method} ${request.path}`);
            console.log({ Payload: request.body });
            console.log({ Headers: request.headers });
        }
        next();
    }
}

export default App;