const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.info(
    `User registered with name: ${name}, email: ${email} and password: ${password}`
  );

  res
    .status(200)
    .json({
      message: "Registered successfully",
      data: { name, email, password },
    });
});

app.listen(PORT, () => console.log(`Server is running....!`));
