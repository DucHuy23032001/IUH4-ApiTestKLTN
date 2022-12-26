console.log("1");
const Router = require("express").Router();
console.log("2");
const AccountController = require("../controllers/accountController");
console.log("3");
console.log("4");
// Router.get("/", AccountController.getAllAccount);
Router.get("/:phoneNumber", AccountController.getAccountByPhoneNumber);
console.log("5");
// Router.get("/:accountID", AccountController.getAccountById);

// Router.post("/forget-password", AccountController.forgetPassWord);

// Router.put("/change-password/:userId", AccountController.changePassWord);


module.exports = Router;