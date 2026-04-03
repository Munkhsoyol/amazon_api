const Category = require("../models/Category");

exports.getCategories = async (req, res, next) => {

    try {
        const categories = await Category.find();
        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (err) {
        next(err);
    }
};

exports.getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        if(!category) {
            return res.status(400).json({
                success: false,
                error: req.params.id + " - ID-тэй ангилал байхгүй байна.",
            });
        } 

        res.status(200).json({
            success: true,
            data: category
        });
    } catch (err) {
        next(err);
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
         next(err);
    }
};

exports.updateCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!category) {
            return res.status(400).json({
                success: false,
                error: req.params.id + " - ID-тэй ангилал байхгүй байна.",
            });
        } 

        res.status(200).json({
            success: true,
            data: category
        });
    } catch (err) {
         next(err);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) {
            return res.status(400).json({
                success: false,
                error: req.params.id + " - ID-тэй ангилал байхгүй байна.",
            });
        } 

        res.status(200).json({
            success: true,
            data: category
        });
    } catch (err) {
         next(err);
    }
};