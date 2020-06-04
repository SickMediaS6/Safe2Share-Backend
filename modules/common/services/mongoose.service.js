const mongoose = require('mongoose');

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://safe2share:zPVlA8gb430wGk11NkgyRlQ3RSmxRbKdxqZ3ucb16LMjAikcscDfFdsa38xJG07z3A3ecPiK09uD7aDbbP5tNw==@safe2share.mongo.cosmos.azure.com:10255/?ssl=true&appName=@safe2share@").then(()=>{
        console.log('MongoDB is connected')
    }).catch(err => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ');
        console.log('The following error occured: ' + err);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;