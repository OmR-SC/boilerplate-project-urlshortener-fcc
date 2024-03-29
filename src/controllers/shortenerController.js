const ShortenedUrls = require("../models/ShortenedUrls");
const { v4 } = require("uuid");
const isValidUri = require("../utils/urlValidator");
const dns = require("dns");

const getShortener = (req, res) => {
  const { short_url } = req.params;

  ShortenedUrls.findOne({ short_url: short_url })
    .then((result) => {
      console.log("res", result);
      if (result) {
        return res.status(301).redirect(301, result.original_url);
      } else {
        throw new Error("invalid url");
      }
    })
    .catch((error) => res.json({ error: error.message || "An error ocurred" }));
};
const postShortener = (req, res) => {
  const { url } = req.body;

  console.log(url);

  const id = v4();

  (async () => {
    try {
      const isValid = await isValidUri(url);

      if (isValid == false) {
        throw new Error();
      }
      const urls = new ShortenedUrls({
        original_url: url,
        short_url: id,
      });

      ShortenedUrls.create(urls);

      ShortenedUrls.findOne({ short_url: id })
        .then(() => res.json(urls))
        .catch((error) =>
          res.json({ error: error.message || "An error ocurred" })
        );
    } catch (error) {
      console.log(error);
      res.json({ error: "invalid url" });
    }
  })();
};

module.exports = { getShortener, postShortener };
