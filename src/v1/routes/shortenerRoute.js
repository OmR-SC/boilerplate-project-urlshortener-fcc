const { Router } = require("express");
const {
  getShortener,
  postShortener,
} = require("../../controllers/shortenerController");

const router = Router();

router.get("/shorturl/:short_url", getShortener);

router.post("/shorturl", postShortener);

module.exports = { router };
