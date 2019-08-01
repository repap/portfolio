const express = require('express')
const path = require('path')
const app = express()

const {PORT} = process.env || 5000

app.use('/', express.static(path.join(__dirname, '/build') ) )

app.get('/api/test', (req, res) => res.send('HELLO :D'))

app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '/build/') + 'index.html'))


app.listen(PORT, err => 
  err ? 
    console.error(err) : 
    console.log(`app is listening to port ${PORT}`))