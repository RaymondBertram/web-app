const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();

// RICHTIG: Hier einen Router einbinden (kein App!)
app.use("/api", require("./routes/api")); // ./routes/api MUSS einen Router exportieren!

app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
