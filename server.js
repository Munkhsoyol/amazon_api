const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
var rfs = require('rotating-file-stream');
const connectDB = require("./config/db");
const colors = require("colors");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

connectDB();

const logger = require("./middleware/logger");

// Router холболт
const categoriesRoutes = require("./routes/categories");

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// setup the logger
const app = express();

// Body parser
app.use(express.json());

app.use(logger);
app.use(morgan('combined', { stream: accessLogStream }));
app.use("/api/v1/categories", categoriesRoutes);

app.listen(
    process.env.PORT, 
    console.log(`Express сервер ${process.env.PORT} порт дээр аслаа....`)
);

// const server = app.listen(
//     process.env.PORT, 
//     console.log(`Express сервер ${process.env.PORT} порт дээр аслаа....`)
// );

// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Алдаа гарлаа: ${err.message}`);
//   server.close(() => {
//     process.exit(1);
//   });
// });