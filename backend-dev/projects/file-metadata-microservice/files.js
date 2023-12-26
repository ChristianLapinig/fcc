const getMetadata = (req, res) => {
	return res.json({
		originalname: req.file.originalname,
		encoding: req.file.encoding,
		mimetype: req.file.mimetype,
		size: req.file.size
	});
};

module.exports = getMetadata;
