const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/country/:name", async (req, res) => {
  const countryName = req.params.name;
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const countryInfo = response.data;
    res.json(countryInfo);
  } catch (error) {
    console.error("Error fetching country info:", error);
    if (error.response.data.status == 404) {
      res.status(404).json({ status: 404, message: "Country not found." });
    } else {
      res.status(500).json({ status: 500, message: "Internal server error" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
