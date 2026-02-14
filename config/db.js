const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("✅ Terhubung ke MongoDB Atlas");
    }
  } catch (error) {
    console.error("❌ Error koneksi MongoDB:", error.message);
    // JANGAN pakai process.exit() di Vercel
  }
};

module.exports = connectDB;
