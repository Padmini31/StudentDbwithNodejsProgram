let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
let dbName = "mydb";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Database connected successfully");
let db = client.db(dbName);
db.collection("Students").deleteOne({_id:1},(err1,result)=>{ //or $or operator
    if(!err1){
        if(result.deletedCount>0){
            console.log("Deleted record successfully ");
        }
        else{
            console.log("no record found");
        }
    }
    else{
        console.log(err1)
    }
    client.close();
})
    }
    else{
        console.log("error generated "+err);
    }
})