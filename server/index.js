const express = require('express');
var fs = require('fs');
const path = require('path');
var https = require('https');
const api = require('./api');
const app = express();

const httpPort = process.env.PORT || 4000;
const httpsPort = process.env.HTTPS_PORT || 4443;

app.use(express.json());

// Backend API (auth, tasks, characters, user settings)
app.use('/api', api);

// Serve the frontend from the repo's /public folder.
// Using an absolute path avoids "Cannot GET /" when starting node from /server.
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// Be explicit about the homepage.
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(httpPort, () => {
    console.log('Server started at http://localhost:%s', httpPort);
});

https
    .createServer({
            key: fs.readFileSync(__dirname + '/server.key'),
            cert: fs.readFileSync(__dirname + '/server.cert'),
        },
        app
    )
    .listen(httpsPort, () => {
        console.log('Server started at http://localhost:%s', httpsPort);
    });