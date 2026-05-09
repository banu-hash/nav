const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const response = await fetch(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        method: "POST",
        headers: {
          authorization:
            "ODfkgALaxZWiWyUsvRwvBZqAndzrmoCzisw1CCqY7gqwwtOf6RfRmcOdCBeP",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          route: "q",
          message: `New message from ${name}`,
          language: "english",
          flash: 0,
          numbers: "7200728722",
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;