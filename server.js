const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const routes = require('./Routes/userRoutes.js')
const bodyParser = require("body-parser")

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crud-mern')
.then(() => {
    console.log('MongoDB Connected');
}).catch((err) => console.log(err))



app.listen(PORT,()=>{
    console.log(`Server connected on Port : ${PORT} `)
});

app.use("/api",routes)