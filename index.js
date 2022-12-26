const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

//models
const Account = require("./models/account");

dotenv.config({
  path: "./config.env",
});
process.on("uncaughtException", (err) => {
  process.exit(1);
});
console.log("123");
const app = require("./app");
console.log("123");
// Connect the database
mongoose.connect(
  "mongodb+srv://nguyenduchuy_19437351:19437351@cluster0.by7zigb.mongodb.net/test",
  () => {
    console.log("Success");
  },
  (e) => console.error(e)
);
console.log("123");
// Start the server
// const _port = process.env.PORT;
app.listen(3000, () => {
  console.log(`Application is running on port 3000`);
});

process.on("unhandledRejection", (err) => {
  server.close(() => {
    process.exit(1);
  });
});

run();
async function run() {
  ///User 1
  const _HuyAccount = await Account.create({
    phoneNumber:"0879276284",
    passWord:await bcrypt.hash("123456", 10),
  });
}