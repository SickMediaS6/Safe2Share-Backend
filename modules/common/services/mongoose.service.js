const mongoose = require('mongoose');

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb&retryWrites=false", {
    auth: {
        user: process.env.COSMODDB_USER,
        password: process.env.COSMOSDB_PASSWORD
    }
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));
};

connectWithRetry();

exports.mongoose = mongoose;