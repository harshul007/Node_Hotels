const express = require('express');
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());   //req.body

app.get('/', function (req, res) {
  res.send('Welcome to my hotel!')
})

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes')
//Use the routers
app.use('/person',personRoutes);
app.use('/menuitem',menuItemRoutes);


app.listen(3000,()=>{
  console.log('Listening on port 3000');
})























































// const data=req.body;  //assuming the req.body contains the person data
//     //Create a new person document using the mongoose model
//     const newPerson = new Person(data); //in order to minimize our code we simply pass the data to the Person()
//     //Save the new person to the database
//     newPerson.save((error,savedPerson)=>{
//       if(error){
//         console.log('Error saving person:',error);
//         res.status(500).json({error:'Internal server error'})
//       }else{
//         console.log('Data saved successfully');
//         res.status(200).json(savedPerson);
//       }
//     })













// app.get('/chicken', function (req, res) {
//     res.send('I would love to serve checken')
//   })
//   app.get('/idli', (req,res)=>{
//     let customized_idli={
//         name:'rava idli',
//         size:'10',
//         is_sambhar:true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
//   })
//   app.post('/items',(req,res)=>{
//     res.send("data is sent");
//   })


