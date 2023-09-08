const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000; // You can change the port as needed

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  try {
    const inputData = req.body.data;

    // Separate numbers and alphabets
    const numbers = inputData.filter((item) => !isNaN(item));
    const alphabets = inputData.filter(
      (item) => isNaN(item) && /^[a-zA-Z]$/.test(item)
    );

    // Find the highest alphabet
    const highestAlphabet =
      alphabets.length > 0
        ? String.fromCharCode(
            Math.max(...alphabets.map((char) => char.charCodeAt(0)))
          )
        : "";

    const response = {
      is_success: true,
      user_id: "prabhu_m_14032003",
      email: "pm3228@srmist.edu.in",
      roll_number: "RA2011003010827",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: [highestAlphabet],
    };

    res.json(response);
  } catch (err) {
    res.send({
      is_success: false,
    });
  }
});

app.get("/bfhl", (req, res) => {
  res.send({
    operation_code: 1,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
