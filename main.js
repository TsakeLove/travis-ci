'use strict';
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello,world!');
});
let port = process.env.PORT;
if (port === null || port === '') {
    port = 8800;
}
app.listen(port, console.log('server listening...'));
