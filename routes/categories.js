const express = require("express");

const {
    getCategories,
    getCategory,
    createCategories,
    updateCategory,
    deleteCategory
} = require("../controller/categories");

const router = express.Router();

router.route("/").get(getCategories).post(createCategories);

router
    .route("/:id")
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory)

module.exports = router;