import React, { useEffect,useState } from 'react';
import './tasks.css'
import TasksCards from './tasksCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './update';
import axios from "axios";
let id= sessionStorage.getItem("id");
let toUpdateArray=[];

const Tasks = () => {

    const [Inputs, setInputs]= useState({title:"", body:""});
    const [Array, setArray]= useState([]);


const show = ()=>{

    document.getElementById("textarea").style.display="block";


}

const change = (e)=>{

    const {name,value} = e.target;
    setInputs({...Inputs,[name]:value});

};

const submit = async () => {

    if (Inputs.title === "" || Inputs.body === "") {
        toast.error("Title and Body should not be empty");
    } 

        else{

            if(id)
            {

                await axios.post("http://localhost:1000/api/v2/addTask",{title:Inputs.title, body:Inputs.body,id:id,}).then((response) => {console.log(response);});

                setInputs({title: "", body: ""});
                toast.success("Task has been added");
            }

            else{

                setArray([...Array,Inputs]);
                setInputs({title: "", body: ""});
                toast.success("Task has been added");
                toast.error("SignUp to save your task!");

            }

        }
};

const del= async(Cardid) => {

    if(id){

        await axios.delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`,{
            data:{id:id},
        
            }).then((response)=>{
        
                toast.success("Task has been deleted");
        
            });

    }

    else{

        toast.error("Please SignUp First");

    }

};

const setDisplay = (value) => {
    document.getElementById("tasks-update").style.display = value;
};

const update = (value) => {
    toUpdateArray=Array[value];
};

useEffect(() => {    

    if(id){

        const fetch =async() => {

            await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`).then((response)=>{setArray(response.data.list);});
      
          };
          fetch();

    }
        

    },[submit]);

  return (
  <>
  <div className='tasks'>

    <ToastContainer/>

    <div className="tasks-main container d-flex justify-content-center align-items-center my-4 flex-column">

        <div className='d-flex flex-column tasks-inputs-div w-100 p-1'>

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

        <div className='w-lg-50 w-100 d-flex justify-content-end my-3'>

        <button className='home-btn px-2 py-1' onClick={submit}>Add</button>

        </div>


    </div>
  
    <div className="tasks-body">

    <div className="container-fluid"> 

    <div className='row '>

    {Array && Array.map((item,index)=>
    (
    
    <div className='col-lg-3 col-10 mx-5 my-2' key={index}>

<TasksCards title={item.title} body={item.body} id={item._id} delid={del} setDisplay={setDisplay}
    updateId={index}
    toBeUpdate={update}

/>

    
    </div>
    
    ))}

    </div>
    
     </div>

    </div>

  </div>
  
  <div className="tasks-update" id="tasks-update">

    <div className="container update">

    <Update setDisplay={setDisplay} update={toUpdateArray}/>

    </div>

  </div>
  
  </>
);

};

export default Tasks;
