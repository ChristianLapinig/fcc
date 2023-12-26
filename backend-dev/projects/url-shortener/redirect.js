const Url = require("./models/Url");

const redirect = async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });

    if (url) {
      // Update click count
      await Url.updateOne({ urlId: req.params.urlId }, { $inc: { clicks: 1 } });
      return res.redirect(url.originalUrl);
    } else {
      res.status(404).json("No URL found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
};

module.exports = redirect;
