const express = require('express');
const filesRouter = require('./routes/files');

const PORT = process.env.PORT || 8080;
const app = express();

// Configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Routes
app.use('/api/files', filesRouter);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

