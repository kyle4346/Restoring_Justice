# Restoring Justice Project 11

Converting a text form into a web application based on Vue.js for the front-end and Node.js & MongoDB for the back-end. Created for Restoring Justice.

## Features

Web application form that allows for the input and documentation of client data for future use stored in a MongoDB database.

## Installation

Requires [Node.js](https://nodejs.org/) and [Vue.js](https://vuejs.org/) to run. The modules and dependencies are included with the project.

First you will need to install [Node.js](https://nodejs.org/). This installation will automatically install [npm](https://www.npmjs.com/) package manager as well.
Next you will need to install [Vue.js](https://vuejs.org/).

You must then either download the [code](https://github.com/CIS-FA21/project-cis_4339_project_11/archive/refs/heads/master.zip), open the code with Github [Desktop](x-github-client://openRepo/https://github.com/CIS-FA21/project-cis_4339_project_11) or clone the repository with [git](https://git-scm.com/).
```sh
git clone https://github.com/CIS-FA21/project-cis_4339_project_11.git
```

Once completed, you can continue with the following steps to install the modules needed for the project.

Install the modules with the following command.
```sh
npm install
```

This will install the modules needed for the project to run.
The main modules used are:
- [MongoDB](https://www.npmjs.com/package/mongodb)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)

These modules can also be manually installed using the following commands.
```sh
npm install mongodb
npm install express
npm install nodemon
```

Then you will need to install the modules inside [Frontend_Intake](frontend_intake). This can be done by changing the directory into the frontend_intake folder/directory and then by running another npm install.
```sh
cd frontend_intake
npm install
```

You will also need to install or use the browser version of [Postman](https://www.postman.com/) to communicate and input data into the application.

You may also want to install MongoDB [Compass](https://www.mongodb.com/products/compass) to view the data that has been input

## Running the Project

To run the project use this command.
```sh
nodemon intake_backend.js
```

If the project runs successfully, you should see the command
```sh
Hello world app listening on port 3000!
```

To run the front-end part of the code you will need to change directory into [Frontend_Intake](frontend_intake) and then run the following command.
```sh
npm run serve
```

If the front-end runs successfully, you should see this command in the terminal
```sh
App running at:
- Local: http://localhost:8080/
```

To access the web application, open your browser and go to your localhost which should be http://localhost:8080/. You can also click [here](http://localhost:8080/)!


### Sprint 1
You can then use the JSON files filled with dummy data in [Sample_Data](Sample_Data) to input data with Postman using GET, PUT, POST, and DELETE. This allows you to create records, read records, update records, and delete records.

The following entries are for the **Postman** app.

For POST/create entries, the input link would be localhost:3000/form with a raw body following JSON format in Postman.

For GET/read entries, the input link would be localhost:3000/forms with no body in Postman.

For a specific attribute in the form such as "Client" you can use  localhost:3000/forms/12 to retrieve any records where the attribute "Client" = 12 with no body in Postman.

To PUT/update a specific value in the form such as "Client" you can use localhost:3000/forms/12 to update a record where the attribute
"Client" = 12.

To DELETE/delete a specific attribute in a form such as "Client" you can use localhost:3000/forms/12 to delete the whole attribute "Client" = 12.

With MongoDB [Compass](https://www.mongodb.com/products/compass) you can view the data that has been input from Postman.

## Postman

Post Link: http://localhost:3000/form

GET, Delete, and Update Link: http://localhost:3000/forms/:

Three sample data JSON files are in the [Sample_Data](Sample_Data) folder.