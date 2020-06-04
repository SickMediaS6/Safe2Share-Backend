const mongoose = require('mongoose');
const env = require('../config/env.config')

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://"+env.azure.COSMOSDB_HOST+":"+env.azure.COSMOSDB_PORT+"/"+env.azure.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
    auth: {
        user: env.azure.COSMODDB_USER,
        password: env.azure.COSMOSDB_PASSWORD
    }
    }).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ');
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;