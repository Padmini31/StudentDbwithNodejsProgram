let mongodb = require("mongodb");//load mongodb module
let mongoClient = mongodb.MongoClient;//Creating the reference of mongodb module.mongoClient is the CLASS and a reserved word is use connect mongodb 
let dbName = "mydb";
let url = "mongodb://127.0.0.1:27017"; // default IP ADDRESS of our machinE

mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Database connected successfuly ");
let db = client.db(dbName);
let emp = {_id:1,name:"padmini",age:11,class:"five",marks:[60,57,83]};
// let emp2 = {_id:7,name:"naira",age:10,class:"five",marks:[67,77,45]};
// let emp1 = {_id:8,name:"shreya",age:9,class:"four",marks:[24,66,56]};
db.collection("Students").insertOne(emp,(err1,res)=>{
    if(!err1){

        console.log(res);
    }
    else{
        console.log(err1);
    }
    client.close();
})
    }
    else {
        console.log("error generated " + err);
    }
})


