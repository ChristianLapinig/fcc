const express = require('express');
const multer = require('multer');	

const router = express.Router();

router.post('/metadata', multer().single('file'), (req, res) => {
	return res.json({ 
		originalname: req.file.originalname,
		encoding: req.file.encoding,
		mimetype: req.file.mimetype,
		size: req.file.size 
	});
});

module.exports = router;
