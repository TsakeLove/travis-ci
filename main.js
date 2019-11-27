'use strict'
const express = require ("express");
const app = express();
app.get("/", function (req,res) {
    res.send("Hello,world!");
});
app.listen(8800, console.log("server listening..."));