import App from './app';
import JwtsController from './jwt/jwtsController';

const port = 9090;
const app = new App(
    [
        new JwtsController(),
    ],
    port,
);

app.listen();
