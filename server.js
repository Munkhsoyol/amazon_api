const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/v1/categories", (req, res) => {
    res.status(200).json({
        success: true,
        data: "View category."
    });
});

app.get("/api/v1/categories/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID show category.`
    });
});

app.post("/api/v1/categories", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Create category."
    });
});

app.put("/api/v1/categories/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID change category.`
    });
});

app.delete("/api/v1/categories/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID delete category.`
    });
});

app.listen(process.env.PORT, console.log(`Express сервер ${process.env.PORT} порт дээр аслаа....`));