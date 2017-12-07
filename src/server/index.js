import express from 'express';

import { accountsMiddleware } from './accounts'


const app = express();

const html = `<!doctype html><html><body><script src="/client.js"></script></body></html>`

app.use(accountsMiddleware);

app.get('/', ( req, res ) => {
    res.send(html)
})



export default ( compilersStats ) => app