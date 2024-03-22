`*HOTEL API*`


This is a simple Express.js API that connects to a MongoDB database and provides endpoints for managing room types and rooms.

`Getting Started`
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

`Prerequisites`
You need to have Node.js and npm installed on your machine. You can download Node.js here and npm is included in the installation.

`Installing`
Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install all the dependencies.
Create a .env file in the root directory of the project, and add your MongoDB URI as Database_URI.
Running the Application
To start the server, run node app.js in the terminal. The server will start on port 8080.

`API ENDPOINT`


The API has the following endpoints:

GET /api/v1/rooms-types: Fetch all room types.

POST /api/v1/rooms-types: Create a new room type.

GET /api/v1/rooms-types/:id: Fetch a single room type by ID.

PUT /api/v1/rooms-types/:id: Update a room type by ID.

DELETE /api/v1/rooms-types/:id: Delete a room type by ID.

GET /api/v1/rooms: Fetch all rooms.

POST /api/v1/rooms: Create a new room.

GET /api/v1/rooms/:id: Fetch a single room by ID.

PUT /api/v1/rooms/:id: Update a room by ID.

DELETE /api/v1/rooms/:id: Delete a room by ID.

Please note that the actual functionality of these endpoints depends on the logic defined in your routes.

Built With
Express.js - The web framework used
Mongoose - Object Data Modeling (ODM) library for MongoDB and Node.js
License
This project is licensed under the MIT License.

