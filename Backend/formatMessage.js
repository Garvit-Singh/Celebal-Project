const moment = require('moment')

const formatMessage = (userId, userName, message) => {
    return {
        userId,
        userName,
        message, 
        time: moment().format("hh:mm:ss A"),
        ms: moment().millisecond()
    }
}

module.exports = formatMessage