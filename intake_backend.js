const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
//let intakeModel = require('./models/intake');
const app = express();
const port = 3000;

app.use(cors());



// used for configuring middleware. It ensures that the text is always json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variable for connection string
let IntakeDb;

/*This connection string variable is for connecting to the database. We actually made it so that anyone from any IP address can connect
as long as they have this string. You can still use your own thing if you want but you can see what we have in our database
if you like*/
let connectionString = `mongodb+srv://kjcorte2:Frenchfries1@cluster0.aoqxz.mongodb.net/Justice`

//used for connecting and assigning IntakeDb to client.db()
MongoClient.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        // IntakeDb = client.db();
        app.listen(port, () => console.log(`Hello world app is listening on port ${port}!`));
    }
);

// POST
//POST LINK: http://localhost:3000/form
app.post('/form', (req, res) => {
    // Part 1 We will be coding here
    // Part 2
    const intake = req.body;

    // Output the form data to the console for debugging
    console.log(intake);

    // Sending request to create a data
    client.db().collection('form').insertOne(req.body, function (err, info) {
        // debugs
        console.log(err);
        console.log(info);
        res.json('Record is added to the database');
    });
});


// Create an endpoint to get all students from the API
//GET LINK: http://localhost:3000/forms
app.get('/forms', (req, res) => {
    // Getting all the data from the collection in the DB
    client.db().collection('form').find().toArray(function (err, items) {
        res.json(items);
    });
});

// Retrieving form field by type
// SEARCH link: http://localhost:3000/forms/:
app.get('/forms/:Client', (req, res) => {
    // Reading field type from the URL
    const Client = req.params.Client;
    console.log(Client);

    // Searching form for the ID use find or findOne
    client.db().collection('form').findOne({ Client: Client }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});


// Delete a form by its field type
//DELETE LINK: http://localhost:3000/forms/:
app.delete('/forms/:Client', (req, res) => {
    // Reading type from the URL
    const Client = req.params.Client;

    // Remove item student type
    client.db().collection('form').deleteOne(
        { Client: Client }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by Client Number!') // Response
        }
    )
});

 //  http://localhost:3000/forms/id/:
app.delete('/forms/id/:id', (req, res) => {
    console.log("Record Deleted")
    // Reading type from the URL
    const id = req.params.id;

    // Remove by client number
    client.db().collection('form').deleteOne(
        { _id: mongodb.ObjectId(id) }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by Client Number!') // Response
        }
    )
});


// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/forms/
app.put('/forms/:Client', (req, res) => {
    // Reading ID from the URL
    const Client = req.params.Client;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Client: Client },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});


// Retrieving form field by type
// SEARCH link: http://localhost:3000/first/:
app.get('/first/:First_Name', (req, res) => {
    // Reading field type from the URL
    const First_Name = req.params.First_Name;
    console.log(First_Name);

    // Searching form for the ID use find or findOne
    IntakeDb.collection('form').findOne({ First_Name: First_Name }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});


// Delete a form by its field type
//DELETE LINK: http://localhost:3000/first/:
app.delete('/first/:First_Name', (req, res) => {
    // Reading type from the URL
    const First_Name = req.params.First_Name;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { First_Name: First_Name }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by First Name!') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/first/
app.put('/first/:First_Name', (req, res) => {
    // Reading ID from the URL
    const First_Name = req.params.First_Name;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ First_Name: First_Name },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});

// Retrieving form field by type
// SEARCH link: http://localhost:3000/last/:
app.get('/last/:Last_Name', (req, res) => {
    // Reading field type from the URL
    const Last_Name = req.params.Last_Name;
    console.log(Last_Name);

    // Searching form for the ID use find or findOne
    IntakeDb.collection('form').findOne({ Last_Name: Last_Name }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});


// Delete a form by its field type
//DELETE LINK: http://localhost:3000/last/:
app.delete('/last/:Last_Name', (req, res) => {
    // Reading type from the URL
    const Last_Name = req.params.Last_Name;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { Last_Name: Last_Name }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by Last Name!') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/forms/
app.put('/last/:Last_Name', (req, res) => {
    // Reading ID from the URL
    const Last_Name = req.params.Last_Name;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Last_Name: Last_Name },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});
///
app.get('/case/:Case_ID', (req, res) => {
    const Case_ID = req.params.Case_ID;
    console.log(Case_ID);
    IntakeDb.collection('form').findOne({ Case_ID: Case_ID }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }
        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});


// Delete a form by its field type
//DELETE LINK: http://localhost:3000/forms/:
app.delete('/case/:Case_ID', (req, res) => {
    // Reading type from the URL
    const Case_IDl = req.params.Case_ID;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { Case_ID: Case_ID }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted ') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/forms/
app.put('/case/:Case_ID', (req, res) => {
    // Reading ID from the URL
    const Case_ID = req.params.Case_ID;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Case_ID: Case_ID },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});
app.get('/birth/:Birth_Date', (req, res) => {
    const Birth_Date = req.params.Birth_Date;
    console.log(Birth_Date);
    IntakeDb.collection('form').findOne({ Birth_Date: Birth_Date }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }
        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});

app.delete('/birth/:Birth_Date', (req, res) => {
    // Reading type from the URL
    const Birth_Date = req.params.Birth_Date;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { Birth_Date: Birth_Date }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted ') // Response
        }
    )
});


app.put('/birth/:Birth_Date', (req, res) => {
    // Reading ID from the URL
    const Birth_Date = req.params.Birth_Date;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Birth_Date: Birth_Date },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});

app.get('/citizen/:US_Citizen_Yes_or_No', (req, res) => {
    const US_Citizen_Yes_or_No = req.params.US_Citizen_Yes_or_No;
    console.log(US_Citizen_Yes_or_No);
    IntakeDb.collection('form').findOne({ US_Citizen_Yes_or_No: US_Citizen_Yes_or_No }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }
        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});

app.delete('/citizen/:US_Citizen_Yes_or_No', (req, res) => {
    // Reading type from the URL
    const US_Citizen_Yes_or_No = req.params.US_Citizen_Yes_or_No;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { US_Citizen_Yes_or_No: US_Citizen_Yes_or_No }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted ') // Response
        }
    )
});


app.put('/citizen/:US_Citizen_Yes_or_No', (req, res) => {
    // Reading ID from the URL
    const US_Citizen_Yes_or_No = req.params.US_Citizen_Yes_or_No;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ US_Citizen_Yes_or_No: US_Citizen_Yes_or_No },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});
app.get('/start/:Start_Date', (req, res) => {
    const Start_Date = req.params.Start_Date;
    console.log(Start_Date);
    IntakeDb.collection('form').findOne({ Start_Date: Start_Date }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }
        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});

app.delete('/start/:Start_Date', (req, res) => {
    // Reading type from the URL
    const Start_Date = req.params.Start_Date;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { Start_Date: Start_Date }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted ') // Response
        }
    )
});


app.put('/start/:Start_Date', (req, res) => {
    // Reading ID from the URL
    const Start_Date = req.params.Start_Date;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Start_Date: Start_Date },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});

// Retrieving form field by type
// SEARCH link: http://localhost:3000/city/:
app.get('/city/:City', (req, res) => {
    // Reading field type from the URL
    const City = req.params.City;
    console.log(City);

    // Searching form for the ID use find or findOne
    IntakeDb.collection('form').findOne({ City: City }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});


// Delete a form by its field type
//DELETE LINK: http://localhost:3000/city/:
app.delete('/city/:City', (req, res) => {
    // Reading type from the URL
    const City = req.params.City;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { City: City }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by City!') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/city/
app.put('/city/:City', (req, res) => {
    // Reading ID from the URL
    const City = req.params.City;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ City: City },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});

// Retrieving form field by type
// SEARCH link: http://localhost:3000/zip/:
app.get('/zip/:Zip_Code', (req, res) => {
    // Reading field type from the URL
    const Zip_Code = req.params.Zip_Code;
    console.log(Zip_Code);

    // Searching form for the ID use find or findOne
    IntakeDb.collection('form').findOne({ Zip_Code: Zip_Code }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});

// Delete a form by its field type
//DELETE LINK: http://localhost:3000/zip/:
app.delete('/zip/:Zip_Code', (req, res) => {
    // Reading type from the URL
    const Zip_Code = req.params.Zip_Code;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { Zip_Code: Zip_Code }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by Zip Code!') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/zip/
app.put('/zip/:Zip_Code', (req, res) => {
    // Reading ID from the URL
    const Zip_Code = req.params.Zip_Code;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Zip_Code: Zip_Code },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});

// Retrieving form field by type
// SEARCH link: http://localhost:3000/close/:
app.get('/close/:Close_Date', (req, res) => {
    // Reading field type from the URL
    const Close_Date = req.params.Close_Date;
    console.log(Close_Date);

    // Searching form for the ID use find or findOne
    IntakeDb.collection('form').findOne({ Close_Date: Close_Date }, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('Error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Field type not found');
        } else {
            res.json(item);
        }
    });
});


// Delete a form by its field type
//DELETE LINK: http://localhost:3000/close/:
app.delete('/close/:Close_Date', (req, res) => {
    // Reading type from the URL
    const Close_Date = req.params.Close_Date;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { Close_Date: Close_Date }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by Close Date!') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/close/
app.put('/close/:Close_Date', (req, res) => {
    // Reading ID from the URL
    const Close_Date = req.params.Close_Date;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ Close_Date: Close_Date },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});