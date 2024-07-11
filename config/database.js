import mongoose from "mongoose"

export default function connect(){
    try{
        mongoose.connect(process.env.MONGOURI)
        return console.log("Database Terhubung!")
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}