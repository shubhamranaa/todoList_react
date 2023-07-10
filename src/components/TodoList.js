import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete"  
        onClick={e=>{
            props.deleteItem(props.index)
        }}>< RiDeleteBin6Line/ ></i>
        </span>
    </li>
  )
}

export default Todolist
