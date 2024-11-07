const mongoose = require("mongoose");

const connectDB = (url) => {
    // url = url.substring(1, url.length - 2);
    return mongoose
        .connect(url)
        .then(() => console.log("try connecting db...."))
        .catch((err) => console.log("ERROR: " + err));
};

module.exports = connectDB;


//main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect("mongodb://localhost:5000/test");
// }