const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/react-login-tut")

.then(() => {
    console.log('Mongodb connect')
})
.catch(() => {
    console.log('failed')
})

const newSchema = new mongoose({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const collection = mongoose.model("collection", newSchema)

module.exports=collection