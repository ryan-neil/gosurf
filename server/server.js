require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const envVariables = require('./config/envVariables');
const spotsRouter = require('./routes/spots');
const errorHandler = require('./middleware/errorHandler');

// mongoose connection to the database
mongoose.connect(envVariables.mongoURI);

// allow request from frontend
app.use(cors(corsOptions));
// handle parsing json
app.use(express.json());

// REMOVE for prod
app.get('/', (req,res) => 
	res.send('Hello from the inside...')
)

// serve routes
app.use('/api/spots', spotsRouter); // spots route

// serve frontend
if (envVariables.nodeEnv === 'production') {
  // set static folder (react build folder)
  app.use(express.static(path.join(__dirname, '../client/build')));
  // route to the index.html file inside the react build folder
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
  );
} 

// error handling
app.use(errorHandler);

// DJ, spin that sh*t...
const PORT = envVariables.port || 9001;
app.listen(PORT, () =>
  console.log(`Server is running at: http://localhost:${PORT}`)
);
