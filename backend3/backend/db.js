function dbConnect() {
    // Db connection
    const mongoose = require('mongoose')
    const url = 'mongodb://localhost:27017/comments?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

    mongoose.connect(url, {
       
    })

    const connection = mongoose.connection
    connection.once('open', function () {
        console.log('Database connected...')
    })
}

module.exports = dbConnect