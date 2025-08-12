// Mongo DB is available on remote; We must install it first as it is not a native module and is managed by Node.

const {MongoClient} = require("mongodb");   

const url = "project_url";
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected Successfully to Server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // Writing Data in DataBase
  const data = {
    FirstName: "Chote",
    LastName: "Chaubey",
    Nation: "India",
    State: "Uttar-Pradesh",
    District: "Varanasi",
  };
  const insertResult = await collection.insertOne(data);

  // Reading Data from DataBase
  const findResult = await collection.find({}).toArray();
  console.log("Found document =>", findResult);

  // Number of Documents in DataBase
  const countResult = await collection.countDocuments({});
  console.log("Count of Documents in the User Collection = ", countResult);

  // Finding Documents in DataBase
  const result = await collection.find({FirstName: "Chote"}).count();
  console.log("Result = ", result);

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());