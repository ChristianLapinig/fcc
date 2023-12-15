const express = require("express");
const Url = require("../models/Url");

const router = express.Router();

router.get("/:urlId", async (req, res) => {
	try {
		const url = await Url.findOne({ urlId: req.params.urlId });

		if (url) {
			// Update clicks count
			await Url.updateOne({ 
				urlId: req.params.urlId ,
			}, 
			{ 
				$inc: { clicks: 1 },
			});

			// Redirect to original url
			return res.redirect(url.originalUrl);
		} else {
			res.status(404).json("No url found");
		}
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
