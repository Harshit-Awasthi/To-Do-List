const mongoose = require('mongoose');

const conn = async (req, res) => {


    try{

        await mongoose.connect("mongodb+srv://awasthiharshit8:G24AuDgx4aBhzPm3@harshit.a6e9kgo.mongodb.net/").then(()=>{
            console.log("connected");
    });

    }
    catch(error){

        res.status(400).json({message: "Not Connected",});

    }

};
conn();