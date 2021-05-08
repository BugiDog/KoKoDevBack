const express = require('express');
const {google} = require('googleapis');
const api = express.Router();
const CLIENT_SECRET = "xCzKi8yf0vEmgYeXkz6AcFSg";
const CLIENT_ID = "741122688681-rdl2kvs46lvtdek2nb4hqj9pubhu43hd.apps.googleusercontent.com";
const REDIRECT_URL = "http://localhost:3000/oauth2callback"

api.get('/', (req, res) => {
    console.log("Authorization")
    const authGooglClient = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
    const scopes = [
        'https://www.googleapis.com/auth/blogger',
        'https://www.googleapis.com/auth/calendar'
    ];

    const url = authGooglClient.generateAuthUrl({

        scope: scopes
    });
    console.log(url)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(url)

});

module.exports = api;