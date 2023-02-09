let mongodb = require("mongodb");//load mongodb module
let mongoClient = mongodb.MongoClient;//Creating the reference of mongodb module.mongoClient is the CLASS and a reserved word is use connect mongodb 
var dbName = "mydb";

let url = "mongodb://127.0.0.1:27017"; // default port number for mongo db is 27017 and 127.0.0.1 is the machine address. 
mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Database connected successfuly ");
        let db = client.db(dbName);//connect to database
        let cur = db.collection("Students").find();
        //let cur = db.collection("Students").find({class:"five"});
        cur.forEach(doc=>{
            console.log(doc);})
            .finally(()=>{
                client.close();
            })
        
    }

    else{
        console.log(err);
    }
})