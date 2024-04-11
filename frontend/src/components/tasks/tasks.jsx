import React, { useState } from 'react';
import './tasks.css'
import TasksCards from './tasksCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './update';


const Tasks = () => {

    const [Inputs, setInputs]= useState({title:"", body:""});
    const [Array, setArray]= useState([]);



const show = ()=>{

    document.getElementById("textarea").style.display="block";


}

const change = (e)=>{

    const {name,value} = e.target;
    setInputs({...Inputs,[name]:value})

}

const submit = ()=>{

    if (Inputs.title === "" || Inputs.body === "") {
        toast.error("Title and Body should not be empty");
    } 

        else{

            setArray([...Array,Inputs]);
            setInputs({title: "", body: ""});
            toast.success("Task has been added");
            toast.error("SignUp to save your task!");


        }


};

const del=(id) => {

    Array.splice(id,"1");
    setArray([...Array]);

}

const dis =(value) => {

    console.log(value);
    document.getElementById("tasks-update").style.display = "block";

};

const setDisplay = (value) => {
    document.getElementById("tasks-update").style.display = value;
};


  return (
  <>
  <div className='tasks'>

    <ToastContainer/>

    <div className="tasks-main container d-flex justify-content-center align-items-center my-4 flex-column">

        <div className='d-flex flex-column tasks-inputs-div w-50 p-1'>

        <input className='my-2 p-2 tasks-inputs'  type="text" placeholder='Title'
        onClick={show} 
        name="title"
        value={Inputs.title}
        onChange={change}
        
        />

        

        <textarea id="textarea" className='p-2 tasks-inputs' type="text" placeholder='Body' 
         name="body" 
         value={Inputs.body}
        onChange={change}
        />

        </div>

        <div className='w-50 d-flex justify-content-end my-3'>

        <button className='home-btn px-2 py-1' onClick={submit}>Add</button>

        </div>


    </div>
  
    <div className="tasks-body">

    <div className="container-fluid"> 

    <div className='row '>

    {Array && Array.map((item,index)=>
    (
    
    <div className='col-lg-3 col-10 mx-5 my-2' key={index}>

<TasksCards title={item.title} body={item.body} id={index} delid={del} setDisplay={setDisplay}/>

    
    </div>
    
    ))}

    </div>
    
     </div>

    </div>

  </div>
  
  <div className="tasks-update" id="tasks-update">

    <div className="container update">

    <Update setDisplay={setDisplay}/>

    </div>

  </div>
  
  </>
);

};

export default Tasks;
