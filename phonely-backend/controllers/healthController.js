const healthCheck = (req, res) => {
  res.status(200).json({ status: "API is running" });
};

module.exports = { healthCheck };
