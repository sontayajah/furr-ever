const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DATABASE)
        console.log('Database is connected.');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection