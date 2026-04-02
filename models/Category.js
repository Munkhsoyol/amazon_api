const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ангиллын нэрийг оруулна уу"],
        unique: true,
        trim: true,
        maxlength: [50, "Ангиллын нэрний утга дээд тал нь 50 тэмдэгт ёстой."]
    },
    description: {
        type: String,
        required: [true, "Ангиллын тайлбарыг заавал оруулна уу"],
        maxlength: [500, "Ангиллын тайлбарын утга дээд тал нь 500 тэмдэгт ёстой."]
    },
    photo: {
        type: String,
        default: "no-photo.jpg"
    },
    averageRating: {
        type: Number,
        min: [1, "Хамгийн багадаа 1 байх ёстой."],
        max: [10, "Хамгийн багадаа 10 байх ёстой."]
    },
    averagePrice: Number,
    createAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Category", CategorySchema);