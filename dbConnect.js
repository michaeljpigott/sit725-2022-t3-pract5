require("dotenv").config(); //helps prevent secret keys from becoming available to the public https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f
const MongoClient = require("mongodb").MongoClient; //connects MongoDb with the project

//add database connection

const uri =
  "mongodb+srv://mpigott:Tue29112022@cluster0.5vufhgp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Check to see if database is connect
client.connect((err, db) => {
  if (!err) {
    console.log("MongoDB Connected");
  } else {
    console.log("DB Error: ", err);
    process.exit(1);
  }
});

module.MongoClient = client;
