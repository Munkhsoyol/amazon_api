exports.getCategories = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "View category.",
        user: req.userId
    });
};

exports.getCategory = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID show category.`
    });
};

exports.createCategories = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "Create category."
    });
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