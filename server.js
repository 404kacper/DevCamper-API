const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

// To run the server in production mode in package.json file use command SET <env var name> to set it on windows
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
