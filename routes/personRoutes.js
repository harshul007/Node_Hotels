const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

router.post('/', async(req,res)=>{
    try{
      const data=req.body;  //assuming the req.body contains the person data
      //Create a new person document using the mongoose model
      const newPerson = new Person(data); //in order to minimize our code we simply pass the data to the Person()
      //Save the new person to the database
      const response = await newPerson.save()
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal Server error'});
    }
})
//Get method to get the perosn
router.get('/',async(req,res)=>{
  try{
    const data= await Person.find();
    console.log('Data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
  }
})
router.get('/:workType',async(req,res)=>{          //parametrized api
  try{
    const workType=req.params.workType;  //extract the work type from the URL parameter
  if(workType=='chef'||workType=='manager'||workType=='waiter'){
     const response=await Person.find({work:workType});
     console.log('Response fetched');
     res.status(200).json(response);
   }else{
    res.status(400).json({error:'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
  }
})

router.put('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;  //Extract the id form the URL patameter
    const updatedPersonData=req.body;  //Updated data for the person
    const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,   //return the updated document
        runValidators:true   //run mongoose validation
    })
    if(!response){
        return res.status(404).json({error:'Person not found'})
      }
    console.log('Data updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
  }
})
router.delete('/:id',async(req,res)=>{
try{
   const personId=req.params.id;    //Extract the id form the URL patameter
   const response=await Person.findByIdAndDelete(personId);
   if(!response){
    return res.status(404).json({error:'Person not found'});
   }
   console.log('Data deleted');
   res.status(200).json({message:'Person deleted Successfully'})
}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
}
})

module.exports=router;