import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";

export const TodoCard = ({task,deleteTask,toggleCompleted}) => {
  function handleChange(){
    toggleCompleted(task.id)
  }

  return (
    <div>
      

<div className="relative bg-white flex justify-center overflow-x-auto shadow-md sm:rounded-lg my-3 ml-2 lg:w-[400px]">
   
    <table className="w-[400px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='flex justify-between items-center'>
                <td scope="col" className="p-2">
                    <div className="flex flex-col items-center">
                        <input type='checkbox' checked={task.completed}
       onChange={handleChange}t id="checkbox-all-search" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td scope="col" className="px-3 py-3">
                {task.text}
                </td>
                <td className="px-3 py-4 flex items-center">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <button onClick={()=> deleteTask(task.id)}> 
       <TiDeleteOutline className='w-5 h-5 ml-2 '/>
       </button>
                </td>
            </tr>
        </thead>
        <tbody>

           
           
        
        </tbody>
    </table>
</div>




          
    </div>
  )
}
