const {MongoClient, Collection} = require ('mongodb')
const url = 'mongodb://localhost:27017';
const databsename = 'admin'
const client =new MongoClient(url);

async function getData()
{
	let result = await client.connect();
	db=result.db(databsename);
	collection =db.collection('admin');
	let data = await collection.find({}).toArray();
	console.log(data)

}
getData();