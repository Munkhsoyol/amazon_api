const express = require("express");
const dotenv = require("dotenv");

// Router холболт
const categoriesRoutes = require("./routes/categories");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
    next();
}

app.use(logger);

app.use("/api/v1/categories", categoriesRoutes);

app.listen(
    process.env.PORT, 
    console.log(`Express сервер ${process.env.PORT} порт дээр аслаа....`)
);