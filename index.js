// ist7D7SPeo6JRLeU
const app = require("./app");
require("dotenv").config();

// JD -> const port = process.env.PORT || 4000;
const port = 4000;

app.listen(port, () => {
  // JD -> console.log(`API LISTENING ON PORT ${process.env.PORT}`);
  console.log(`API LISTENING ON PORT ${port}`);
});
