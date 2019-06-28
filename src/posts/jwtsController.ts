import * as express from "express";
import * as request from "request";
import * as bodyParser from "body-parser";
import * as jwt from "jsonwebtoken"
import User from "./userModel";

class JwtsController {
    public loginPath = '/login';
    public router = express.Router();


    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.use(bodyParser.json())
        this.router.post(this.loginPath, this.login);
    }

    login = (req: express.Request, res: express.Response) => {
        request.get({
            url: "http://localhost:9111/getMockedBody"
        }, (err, usdbResponse) => {
            if (err) {
                console.log(err)
                res.status(400).send(err)
            } else {
                const jwtBody: User = usdbResponse.body;
                const bearer = `Bearer ${jwt.sign(jwtBody, "privateKey")}`
                res.status(200).set("Authorization", bearer).send();
            }
        });
    }
}

export default JwtsController;