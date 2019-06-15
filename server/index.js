const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
require('dotenv').config()

app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/getItem', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getItem(req.query.checklistItem, req.query.cost, req.query.notes)
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/api/createItem', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createItem(req.body.checklistItem, req.body.cost, req.body.notes).then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})


const port = 3063;
massive(process.env.connectionString).then(db => {
    app.set('db', db)
    app.listen(port, () => console.log(`Server listening on port ${port}`))
})