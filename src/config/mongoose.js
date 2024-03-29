const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.MONGO_URI;
  mongoose
    .connect(DB_URI)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
