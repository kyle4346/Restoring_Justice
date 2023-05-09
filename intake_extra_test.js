// First_Name, Last_Name, Case_ID, Start_Date, Close_Date

// Retrieving form field by type
// SEARCH link: http://localhost:3000/forms/:
app.get('/forms/:First_Name', (req, res) => {
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
//DELETE LINK: http://localhost:3000/forms/:
app.delete('/forms/:First_Name', (req, res) => {
    // Reading type from the URL
    const First_Name = req.params.First_Name;

    // Remove item student type
    IntakeDb.collection('form').deleteOne(
        { First_Name: First_Name }, // MongoDB query
        function () { // Callback
            res.send('Successfully Deleted Intake Form by Client Number!') // Response
        }
    )
});

// Updating - editing a form field - we want to use PUT
//UPDATE LINK: http://localhost:3000/forms/
app.put('/forms/:First_Name', (req, res) => {
    // Reading ID from the URL
    const First_Name = req.params.First_Name;

    // Updating a student by it's ID and new data
    IntakeDb.collection('form').findOneAndUpdate({ First_Name: First_Name },
        { $set: req.body }, function () {
            res.send('Form field is edited via PUT');
        }
    )
});