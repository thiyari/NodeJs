const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url,function(err, db){
	if(err){
		return console.dir(err);
	}
	console.log('Connected to mongodb');

	/*
	InsertDocument(db, function(){
		db.close();
	});

	InsertDocuments(db, function(){
		db.close();
	}); */

	FindDocuments(db, function(){
		db.close();
	}); 
/*
	QueryDocuments(db, function(){
		db.close();
	});


	UpdateDocument(db, function(){
		db.close();
	});


	RemoveDocument(db, function(){
		db.close();
	});

	*/
});

// Insert Single Doc
const InsertDocument = function(db, callback){
 // Get collection
 const collection = db.collection('users');
 // Insert Docs
 collection.insert({
 	name: 'Manikanth',
 	email: 'mani@test.com'
 },function(err, result){
 	if(err){
 		return console.dir(err);
 	}
 	console.log('Insert Document');
 	console.log(result);
 	callback(result);
 });
}

// Insert Multiple Docs
const InsertDocuments = function(db, callback){
	//Get Collection
	const collection = db.collection('users');
	collection.insertMany([
	{
		name: 'Ravi Kanth',
		email: 'ravi@test.com'
	},
	{
		name: 'Chandra Kanth',
		email: 'chandra@test.com'
	},
	{
		name: 'Surya Kanth',
		email: 'surya@test.com'
	}
		],
		function(err, result){
			if(err){
 		return console.dir(err);
 	}
 	console.log('Insert '+result.ops.length+' documents');
 	callback(result);
		});
}

// Find Documents
const FindDocuments = function(db, callback) {
	// Get Collection
	const collection = db.collection('users');

	collection.find({}).toArray(function(err, docs){
		if(err){
			return console.dir(err);
		}
		console.log('Found the following records');
		console.log(docs);
		callback(docs);
	});
}

//Query Documents
const QueryDocuments = function(db,callback){
	// Get Collection
	const collection = db.collection('users');

	collection.find({'name': 'Ravi Kanth'}).toArray(function(err, docs){
		if(err){
			return console.dir(err);
		}
		console.log('Found the following records');
		console.log(docs);
		callback(docs);
	});
}

// Update Document
const UpdateDocument = function(db, callback){
	// Get Collection
	const collection = db.collection('users');

	collection.updateOne({name: 'Ravi Kanth'},
	{$set: {email:'ravi@something.com'}},
	function(err, result){
		if(err){
			return console.dir(err);
		}
		console.log('Updated Document');
		callback(result);
	});
}

// Remove Document
const RemoveDocument = function(db, callback){
	// Get Collection
	const collection = db.collection('users');

	collection.deleteOne({name: 'Ravi Kanth'},function(err, result){
		if(err){
			return console.dir(err);
		}
		console.log('Removed Document');
		console.log(result);
		callback(result);
		});
}