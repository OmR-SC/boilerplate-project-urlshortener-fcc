const dns = require("dns");

const isValidUri = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        console.log(res.ok);
        if (res.ok) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = isValidUri;
