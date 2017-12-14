import express from 'express';

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { authMiddleware, accountsRouter } from './accounts'


const app = express();

const html = `
<!doctype html>
<html>
    <body>
        <div id="app"></div>
        <script src="/client.js"></script>
    </body>
</html>
`

app.use(cors({
    origin: 'localhost'
}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

app.use( (req, res, next) => {
    console.log(req)
    next()
})

app.use(authMiddleware);

app.use(accountsRouter);

app.get('/', ( req, res ) => {
    res.send(html)
})



export default ( compilersStats ) => app