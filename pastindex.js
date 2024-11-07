const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//     res.send();    
// });

app.get("/about", function (req, res) {
    res.send("About");
});

app.get("/api/v1/tasks")

app.get("/api/v1/users", function (req, res) {
   res.send({
       "agent": "PC",
       "is_del": 0,
       "secret_key": "sajab1sefdqbg49duo3mkgu0tfviy9bi",
       "created_uint_at": 1730255847,
       "updated_uint_at": 1730255847,
       "id": 3
   }) ;
});

const PORT = process.env.PORT || 2434;
app.listen(PORT, function (){
    console.log("I am running!");
});

