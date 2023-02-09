let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;//Creating the reference of mongodb module.mongoClient is the CLASS and a reserved word is use connect mongodb 

let url = "mongodb://127.0.0.1:27017"; // default IP ADDRESS of our machinE

mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Database connected successfully");
    }
    else{
        console.log("error generated "+err);
    }
})
