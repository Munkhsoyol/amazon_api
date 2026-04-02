const Category = require("../models/Category");

exports.getCategories = async (req, res, next) => {

    try {
        const categories = await Category.find();
        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err
        });
    }
};

exports.getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        if(category) {
            res.status(200).json({
                success: true,
                data: category
            });
        } else {
            res.status(400).json({
                success: false,
                data: req.params.id + " - Байхгүй байна.",
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            data: err,
        });
    }
};

exports.createCategories = async (req, res, next) => {
    console.log("data: ", req.body);

    try {
        const category = await Category.create(req.body);
        res.status(200).json({
            success: true,
            data: category,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

exports.updateCategory = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID change category.`
    });
};

exports.deleteCategory = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID delete category.`
    });
};