let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
let dbName = "mydb";
mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Database connected successfully");
        let db = client.db(dbName);

    
        db.collection("Students").updateMany({name:"parvat"}, {$set:{marks:[100,65,74]}},(err1, result) => { //or $or operator
            if (!err1) {
                if (result.modifiedCount > 0) {
                    console.log("updated record successfully");
                }
                else if (result.matchedCount > 0) {
                    console.log("old and new  record are same");
                }
                else {
                    console.log("no record")
                }
            }
            else {
                console.log(err1);
            }
            client.close();
        })
    }
    else {
        console.log("error generated " + err);
    }
})