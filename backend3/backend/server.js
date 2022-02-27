const express = require('express')
const app = express()
var cors = require('cors');
const port = process.env.PORT || 9000
const dbConnect = require('./db')
dbConnect()
const Comment = require('./models/comment')
app.use(cors())
app.use(express.json())
// Routes 
app.post('/api/comments',  (req, res) => {
    console.log(req.body)
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment,
        src: req.body.src
    })
    comment.save().then(response => {
        res.send(response)
    })

})

app.get('/api/comments', (req, res) => {
    Comment.find().then(function(comments) {
        res.send(comments)
    })
})


const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

let io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`)
    // Recieve event
    socket.on('comment', (data) => {
        data.time = Date()
        socket.broadcast.emit('comment', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data) 
    })
})