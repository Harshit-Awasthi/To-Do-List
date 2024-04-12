import axios from "axios";
import React, { useEffect,useState } from 'react';
import {toast} from "react-toastify"


const Update = ({setDisplay,update}) => {

    useEffect(()=>{

        setInputs({title:update.title,body:update.body})
        
    },[update]);




    const [Inputs,setInputs]=useState({title:"",body:"",})

    const change = (e) => {

        const {name,value} = e.target;
        setInputs({...Inputs,[name]:value});

    }


    const submit = async() =>{


        await axios.put(`${window.location.origin}/api/v2/updateTask/${update._id}`,Inputs).then((response)=>{
            
        toast.success(response.data.message);
    
    
    });

        setDisplay("none");

    }

  return (
  
  <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>

    <h3>
        Update your task 
    </h3>

    <input type="text" className='tasks-inputs my-4 w-100 p-3' value={Inputs.title} name="title" onChange={change}/>
    <textarea className='tasks-inputs w-100 p-3'name="body"  value={Inputs.body} onChange={change}/>
    <div>

    <button className='btn btn-dark my-4' onClick={submit}>Update</button>

<button className='btn btn-danger my-4 mx-3' 

onClick={()=>{setDisplay("none");}}

>Close</button>

    </div>
  
  </div>
  
);

};

export default Update;
