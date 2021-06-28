let users = []

const userJoin = (socketId, userId, roomId, userName) => {
    const user = {socketId, userId, roomId, userName}
    !users.some(user => user.userId === userId) && users.push(user)
    return user
}

const userLeave = (socketId) => {
    const index = users.findIndex(user => user.socketId === socketId)
    if(index != -1) {
        return users.splice(index, 1)[0]
    }
}

const getRoomUsers = (roomId) => {
    return users.filter(user => user.roomId === roomId)
}

module.exports = { userJoin, userLeave, getRoomUsers}