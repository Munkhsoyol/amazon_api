const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "View category."
    });
});

router.get("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID show category.`
    });
});

router.post("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Create category."
    });
});

router.put("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID change category.`
    });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID delete category.`
    });
});

module.exports = router;