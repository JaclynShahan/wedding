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
    dbInstance.getSong()
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/api/getGuest', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getGuest(req.query.name, req.query.address, req.query.email)
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/api/getNote', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getNote(req.query.note)
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
})
//.catch((err) => {
  //  console.log(err)
//})

app.post('/api/createSong', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createSong(req.body.artist, req.body.title).then((resp) => {
        console.log(resp)
        //console(req.body)
      dbInstance.getSong().then((resp) => {
          res.status(200).send(resp)
      })

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
        dbInstance.getItem(req.query.checklist_item, req.query.cost, req.query.notes).then((resp) => {
            res.status(200).send(resp)
        })
       
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/api/createGuest', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createGuest(req.body.name, req.body.address, req.body.email).then((resp) => {
        console.log(resp)
        console.log(req.body)
        dbInstance.getGuest(req.query.name, req.query.address, req.query.email).then((resp) => {
           res.status(200).send(resp)
        })
    })
    .catch((err) => {
        console.log(err)
    })
})
app.post(`/api/createNote`, (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createNote(req.body.note).then((resp) => {
        console.log(req.body)
        dbInstance.getNote().then((resp) => {
            res.status(200).send(resp)
        }) 
    })
    .catch((err) => {
        console.log(err)})
 
})


app.delete(`/api/deleteItem/:id`, (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteItem(req.params.id).then(() => {
        console.log('deleted')
      dbInstance.getItem(req.query.checklist_item, req.query.cost, req.query.notes).then((resp) => {
        res.status(200).send(resp)
      })
    })
    .catch((err) => {
        console.log(err)
    })
})
app.delete('/api/deleteSong/:id', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteSong(req.params.id).then(() => {
        console.log('deleteparams', req.params.id)
       dbInstance.getSong()
       .then((resp) => {
           res.status(200).send(resp)
       })
    })
    .catch((err) => {
        console.log(err)
    })
})

app.delete('/api/deleteGuest/:id', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteGuest(req.params.id).then(() => {
        console.log('deleted', req.params.id)
      dbInstance.getGuest()
      .then((resp) => {
          res.status(200).send(resp)
      })
    })
    .catch((err) => {
        console.log(err)
    })
})

app.delete('/api/deleteNote/:id', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteNote(req.params.id).then(() => {
        console.log('deleted')
        dbInstance.getNote().then((resp) => {
            res.status(200).send(resp)
        })
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