module.exports = {
    "port": 3600,
    "appEndpoint": "http://localhost:3600",
    "apiEndpoint": "http://localhost:3600",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    },
    "azure": {
        COSMODDB_USER = "safe2share",
        COSMOSDB_PASSWORD = "zPVlA8gb430wGk11NkgyRlQ3RSmxRbKdxqZ3ucb16LMjAikcscDfFdsa38xJG07z3A3ecPiK09uD7aDbbP5tNw==",
        COSMOSDB_DBNAME = "safe2share",
        COSMOSDB_HOST= "safe2share.mongo.cosmos.azure.com",
        COSMOSDB_PORT=10255
    }
};