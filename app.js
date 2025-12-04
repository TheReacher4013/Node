const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const todoRoute = require ("./routes/todo.route")
const userRoute = require ("./routes/user.route")

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://rushi-kesh:rushi123@my-cluster.kpd7p2g.mongodb.net/?appName=my-cluster")
.then(()=>{
    console.log("Mongodb connected");
}).catch(error=>{
    console.log("error", error);
})
app.use("/todo",todoRoute)
app.use("/user", userRoute);

module.exports = app;