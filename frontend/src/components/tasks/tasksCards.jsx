import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";

const TasksCards = ({ title, body, id, delid, setDisplay,updateId,toBeUpdate }) => {
  return (
    <div className='p-3 tasks-card'>
      <div>
        <h5>{title}</h5>
        <p className='tasks-card-p'>
          {body.split("", 77)}...
        </p>
      </div>
      <div className='d-flex justify-content-around'>
        <div
          className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1'
          onClick={() => {
            setDisplay("block");
            toBeUpdate(updateId);
          }}
        >
          <MdOutlineUpdate className='card-icons' /> Update
        </div>
        <div
          className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger'
          onClick={() => {
            delid(id);
          }}
        >
          <FaDeleteLeft className='card-icons del' /> Delete
        </div>
      </div>
    </div>
  );
};

export default TasksCards;
