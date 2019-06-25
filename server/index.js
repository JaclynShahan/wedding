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
    dbInstance.getItem(req.query.checklist_item, req.query.cost, req.query.notes)
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})
app.get('/api/getSong', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getSong(req.query.artist, req.query.title)
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/api/createSong', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createSong(req.body.artist, req.body.title).then((resp) => {
        console.log(resp)
        console(req.body)
        res.status(200).send(resp)

    })
    .catch((err) => {
        console.log(err)
   
})

})

app.post('/api/createItem', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createItem(req.body.checklist_item, req.body.cost, req.body.notes).then((resp) => {
        console.log(resp)
        console.log(req.body)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.delete('/api/deleteItem/:id', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteItem(req.params.id).then(() => {
        console.log('deleted')
        res.status(200).send('deleted')
    })
})
app.delete('/api/deleteSong/:id', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteSong(req.params.id).then(() => {
        console.log('deleted')
        res.status(200).send('deleted')
    })
})

const port = 3063;
massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(port, () => console.log(`Server listening on port ${port}`))
})