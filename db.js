const mongoose=require('mongoose');
//define the mongodb connection URL
const mongoURL='mongodb://127.0.0.1:27017/hotels';
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