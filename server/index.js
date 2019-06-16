const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const r = require('rethinkdb');
require('dotenv').config()

app = express();
app.use(bodyParser.json());
app.use(cors());

let connection
r.connect(
  {
    host: `${process.env.serverip}`,
    port: `${process.env.rethinkdbport}`,
    db: 'jaclyn',
    user: `${process.env.rethinkdbuser}`,
    password: `${process.env.rethinkdbpw}`
  },
  function (err, conn) {
    if (err) console.log('error in connection: ', err)
    console.log(`here is conn: ${conn}`)
    connection = conn
    app.set('reThinkDB', conn)
  }
)

setTimeout(() => {
  console.log('Connected to rethinkdb server: ', connection.host)
}, 3000)

getItems = res => {
    r.table('items').run(connection, (err, cursor) => {
      if (err) console.log(err)
      cursor.toArray((err, data) => {
        res.status(200).send(data)
      })
    })
  }

  let items = []
  app.get('/api/test', (req, res) => {
    res.status(200).send({ message: 'It works' })
  })
  app.get(`/api/getItems`, (req, res) => {
    getItems(res)
  })

  app.get('/api/itemSearch', (req, res) => {
    console.log(req.query)
    items.map(item => {
      return item
    })
  })


// app.post('/api/addItems', (req, res) => {
//   console.log(req.body)
//   r.table('items')
//     .insert(req.body)
//     .run(connection, (err, data) => {
//       console.log(data.generated_keys)
//       r.table('items')
//         .get(data.generated_keys[0])
//         .run(connection, (err, itemData) => {
//           console.log(itemData)

//           getItems(res)
//         })
//     })
// })
  app.post('/api/addItems', (req, res) => {
    console.log(req.body)
    r.table('items')
      .insert(req.body.item)
      .run(connection, (err, data) => {
        console.log(data)
        getItems(res)
      })
  })

  app.delete('/api/deleteItems/:id', (req, res) => {
    console.log(req.params)
    r.table('items')
      .get(req.params.id)
      .delete()
      .run(connection, (err, data) => {
        console.log(data)
        getItems(res)
      })
  })

// app.get('/api/getItem', (req, res) => {
//     const dbInstance = req.app.get('db')
//     dbInstance.getItem(req.query.checklistItem, req.query.cost, req.query.notes)
//     .then((resp) => {
//         console.log(resp)
//         res.status(200).send(resp)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// app.post('/api/createItem', (req, res) => {
//     const dbInstance = req.app.get('db')
//     dbInstance.createItem(req.body.checklistItem, req.body.cost, req.body.notes).then((resp) => {
//         console.log(resp)
//         res.status(200).send(resp)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })


const port = 3063;
app.listen(port, () => console.log(`Server listening on port ${port}`))
