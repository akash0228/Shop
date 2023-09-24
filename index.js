const express=require('express');
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./routes/user");
const authRoute=require('./routes/auth');

dotenv.config();

const URL=process.env.MONGO_URL;
const PORT=process.env.PORT || 5000;

mongoose.connect(URL).then(()=>console.log("Database Connected")).catch((err)=>{console.log(err)});

app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


app.listen(PORT,()=>{
    console.log("Server is Running!");
})