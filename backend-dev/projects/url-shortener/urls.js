const ShortUniqueId = require("short-unique-id");
require("dotenv").config();

const Url = require("./models/Url");
const { validateUrl } = require("./lib/utils");

const shortenUrl = async (req, res) => {
  // Get the original url from the request body
  const { originalUrl } = req.body;

  // Validate URL
  if (validateUrl(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });

      if (url) {
        // Return shortened url if it exists
        res.json(url);
      } else {
        // Add url if it doesn't exist
        const urlId = new ShortUniqueId({ length: 6 }).randomUUID();
        url = new Url({
          urlId,
          originalUrl,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(400).json("Invalid URL");
  }
};

module.exports = shortenUrl;
