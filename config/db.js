const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}` .cyan.underline.bold);
  } catch (error) {
    console.error("Mongo error:", error.message .underline.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;