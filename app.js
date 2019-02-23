const https = require('https');
const express = require('express');

const app = express();

app.get('/vms-voice', (req, res) => {
    
});

https.createServer(app).listen(1337, '127.0.0.1');
console.log('Twilio Client app server running at http://127.0.0.1:1337/token/');

