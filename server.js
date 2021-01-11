const express= require("express");
const mongoose= require("mongoose")
const bodyParser= require("body-parser");

const app= express();

//body parser middleware
app.use(bodyParser.json());


//ROUTES
const itemRoutes= require("./routes/api/items");
const indexRoutes= require("./routes/index");
//DB CONFIG
const db= require("./config/keys").mongoURI;

//CONNECT databases
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("mongoDB connected.."))
    .catch(err=>console.log(err));


//use routes
app.use("/", indexRoutes);
app.use("/api/items", itemRoutes);
//RUN SERVER
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));
