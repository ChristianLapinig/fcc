const timestamp = (req, res) => {
  let date;

  if (isNaN(req.params.date)) {
    date = new Date(req.params.date);
  } else {
    date = new Date(parseInt(req.params.date));
  }

  if (date.toString() === "Invalid Date") {
    res.json({
      error: "Invalid Date",
      value: req.params.date,
    });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
};

module.exports = timestamp;
