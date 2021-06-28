const formatMessage = require('./formatMessage')
const { userJoin, userLeave, getRoomUsers }  = require('./users')

const io = require('socket.io')(3001, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on('connection', socket => {

    // on joining room notify everyone
    socket.on('join room', ({userId, roomId, userName}) => {
        console.log('someone connected')
        // local database store the joined user
        userJoin(socket.id, userId, roomId, userName);

        // make user join room
        socket.join(roomId)

        // to everyone send users list
        io.to(roomId).emit('user list', getRoomUsers(roomId))

        // notification for everyone except the joined person
        socket.broadcast.to(roomId).emit('notification', formatMessage( -1, "BOT" ,`${userName} joined the room`))

        // notification for the joined user only
        io.to(socket.id).emit('notification', formatMessage( -1, "BOT" , 'Welcome to Room!'))

    })

    // broadcasting message
    socket.on('message', ({userId, roomId, userName, message}) => {
        console.log('messages sent')
        // send data to everyone
        io.to(roomId).emit('message', formatMessage(userId, userName, message))
    })
    
    // on disconnecting from server 
    socket.on('disconnect', () => {
        console.log('someone disconnected')
        const user = userLeave(socket.id)
        if(user) {
            console.log(user.roomId)
            io.to(user.roomId).emit('notification', formatMessage(-1, "BOT", `${user.userName} has left the room`))
            io.to(user.roomId).emit('user list', getRoomUsers(user.roomId))
        }
    })

})