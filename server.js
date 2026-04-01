const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
var rfs = require('rotating-file-stream');

const logger = require("./middleware/logger");

// Router холболт
const categoriesRoutes = require("./routes/categories");

dotenv.config({ path: "./config/config.env" });

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// setup the logger
const app = express();

app.use(logger);
app.use(morgan('combined', { stream: accessLogStream }));
app.use("/api/v1/categories", categoriesRoutes);

app.listen(
    process.env.PORT, 
    console.log(`Express сервер ${process.env.PORT} порт дээр аслаа....`)
);