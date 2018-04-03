'use strict'
const http = require('http');
const debug = require ('debug')('nodestr:server');
const express = require ('express');

const app = express();
const port = normalizePort(process.env.PORT ||'3000');
app.set ('port', port);

const server = http.createServer(app);
const router = express. Router();

const route = router.get('/', (req, res,next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use ('/', route);

server.listen(port);
server.on('error', onError);
server.on ('listening', onListening);
console.log ('API rodando na porta' + port );


function normalizePort(val)
{
    const port = parseInt (val,10);

    if (isNaN(port)){
        return val;
    }
    if( port >= 0){
        return port;
    }
    return false;
    }

    function onError (error){
        if (erro. syscall !== 'listen'){
            throw error;
        }
        const bing = typeof port === 'string' ?
            'Pipe' + port :
            'Port' + port;
            
            switch (error.code){
                case ' EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
                case ' EADDRINUSE':
                console.error (bing + 'is already in use');
                process.exit(1);
                break;
                defalt;
                throw error;

            }

            function onListening (){
                const addr = server.address();
                const bind = typeof addr === 'string'
                ? 'pipe' + addr
                : 'port' + addr.port;
                debug('Listening on' + bind);
             }

        }
    








