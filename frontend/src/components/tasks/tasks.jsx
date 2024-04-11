import React from 'react';
import './tasks.css'


const Tasks = () => {

const show = ()=>{

    document.getElementById("textarea").style.display="block";


}

  return (
  
  <div className='tasks'>

    <div className="tasks-main container d-flex justify-content-center align-items-center my-4 flex-column">

        <div className='d-flex flex-column tasks-inputs-div w-50 p-1'>

        <input className='my-2 p-2 tasks-inputs'  type="text" placeholder='Title'
        onClick={show}  />

        <textarea id="textarea" className='p-2 tasks-inputs' type="text" placeholder='Body'   />

        </div>

        <div className='w-50 d-flex justify-content-end my-3'>

        <button className='home-btn px-2 py-1'>Add</button>

        </div>


    </div>
  
  </div>
  
);

}

export default Tasks;
