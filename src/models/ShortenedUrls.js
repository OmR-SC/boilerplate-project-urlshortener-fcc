const mongoose = require("mongoose");

const shortenedUrlsSchema = new mongoose.Schema({
  original_url: String,
  short_url: String,
});

module.exports = mongoose.model("ShortenedUrls", shortenedUrlsSchema);
