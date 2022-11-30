import mongoose from "mongoose"

const DBconection = () => {
    mongoose.connect(process.env.MONGO_STRING , {
        serverSelectionTimeoutMS : 1000,
    }).then(() =>{
        console.log('Database Connected with MongoDB')
    }).catch((err) => {
        console.log(err)
    })
}

export default DBconection;