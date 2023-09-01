'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('vision');
const Handlebars = require('handlebars')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/implant',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/login',
        handler: (request, h) => {
            return 'Hello World! 2';
        }
    });

    await server.start();
    plugin: require('vision')
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();