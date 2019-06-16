import App from './app';
import PostsController from './posts/postController';

const port = 9090;
const app = new App(
    [
        new PostsController(),
    ],
    port,
);

app.listen();
