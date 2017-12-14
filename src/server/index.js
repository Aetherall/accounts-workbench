import express from 'express';

import bodyParser from 'body-parser'

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
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(authMiddleware);

console.log(accountsRouter)

app.use(accountsRouter);

app.get('/', ( req, res ) => {
    res.send(html)
})



export default ( compilersStats ) => app