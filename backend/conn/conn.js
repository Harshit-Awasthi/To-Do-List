const mongoose = require('mongoose');
require('dotenv').config()

const conn = async (req, res) => {


    try{

           await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("connected");
    });

    }
    catch(error){

        res.status(400).json({message: "Not Connected",});

    }

};
conn();