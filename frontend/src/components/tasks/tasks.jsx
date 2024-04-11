import React, { useState } from 'react';
import './tasks.css'
import TasksCards from './tasksCards';


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

    setArray([...Array,Inputs]);
    setInputs({title: "", body: ""});

};

  return (
  
  <div className='tasks'>

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
    
    <div className='col-lg-3 col-10 mx-5 my-2'>

    <TasksCards title={item.title} body={item.body} />
    
    </div>
    
    ))}

    </div>
    
     </div>

    </div>

  </div>
  
);

};

export default Tasks;
