const express = require('express')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Where we will keep students for now
// let students = [];

app.use(cors());

// Configuring express middleware
// helps us decode the body from an HTTP request (this is called body-parser)
// What the body-parser middleware will be doing is grabbing the HTTP body, decoding the information,
// and appending it to the req.body. From there, we can easily retrieve the information from a request.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variable that is our "connection" to the DB - a MongoDB client
let studentsDB;

let connectionString = `mongodb://localhost:27017/StudentRecords`

MongoClient.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        studentsDB = client.db();
        app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
    }
);

// create an endpoint that will insert a student into a DB
app.post('/student', (req, res) => {
    // Part 1 We will be coding here
    // Part 2
    const student = req.body;

    // Output the student data to the console for debugging
    console.log(student);

    // Sending request to create a data
    studentsDB.collection('students').insertOne(req.body, function (err, info) {
        // some more debugging info
        console.log(err);
        console.log(info);
        res.send('Student is added to the database');
    });
});


//create an endpoint to get all students from the API
app.get('/students', (req, res) => {
    // getting all the data from the collection in the DB
    studentsDB.collection('students').find().toArray(function (err, items) {
        res.json(items);
    });
});

// retrieving student by studentID
// adding the : to the route path we can define a variable
app.get('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    console.log(id);

    // Searching students for the id 9use find or findOne
    studentsDB.collection('students').findOne({ id: id }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Student not found');
        } else {
            res.json(item);
        }
    });
});

//delete a student by id
app.delete('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Remove item student ID
    studentsDB.collection('students').deleteOne(
        { id: id }, //mongodb query
        function () { //calback
            res.send('Successfully deleted!') //response
        }
    )
});

// Updating - editing a student - we want to use PUT
app.put('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // updating a student by it's ID and new data
    studentsDB.collection('students').findOneAndUpdate({ id: id },
        { $set: req.body }, function () {
            res.send('Student is edited via PUT');
        }
    )
});



//Optional:

// const options = {
//     // sort matched documents in descending order by rating
//     sort: { rating: -1 },
//     // Include only the `title` and `imdb` fields in the returned document
//     projection: { _id: 0, title: 1, imdb: 1 },
//   };