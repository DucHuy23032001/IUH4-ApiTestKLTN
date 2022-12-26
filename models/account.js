console.log("a");
const mongoose = require('mongoose');
console.log("a");
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

console.log("a");

const accountSchema = new Schema({
    phoneNumber:{
        type:String,
        required:[true,"Please fill your phoneNumber"]
    },
    passWord:{
        type: String,
        required: [true, "Please fill your password"],
        minLength: 6,
        select: true,
    }
})
// accountSchema.methods.correctPassword = async function(
//     typedPassword,
//     originalPassword,
//   ) {
//     return await bcrypt.compare(typedPassword, originalPassword);
// };
module.exports = mongoose.model("Account",accountSchema);