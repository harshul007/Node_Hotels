const mongoose=require('mongoose');
require('dotenv').config();
//define the mongodb connection URL
// const mongoURL=process.env.DB_URL_LOCAL;
const mongoURL=process.env.DB_URL
//Setup the mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//Get the defualt connection
//Mongoose maintain a default connection object representoing the mongodb connection
const db = mongoose.connection;
//Define event listener to database connection
db.on('connected',()=>{
   console.log('Connected to MongoDB server');
})
db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
})
db.on('disconnected',()=>{
    console.log('Disconnected MongoDB');
})
//Export the database connection
module.exports=db;