if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}
const express=require("express")
const app= express()
const expressLayouts= require("express-ejs-layouts")
const indexRouter=require("./routes/index")

app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.set("layout","layouts/layouts")

app.use(expressLayouts)
app.use(express.static("public"))

const mongoose=require("mongoose")

mongoose.connect(process.env.DATABASE_URL,function(){
    console.log("connected")
},function(e){
    console.error(e)
})

app.use("/",indexRouter)

app.listen(process.env.PORT|| 3000)