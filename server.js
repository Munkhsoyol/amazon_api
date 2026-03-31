const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express server!");
});

app.listen(process.env.PORT, console.log(`Express сервер ${process.env.PORT} порт дээр аслаа....`));