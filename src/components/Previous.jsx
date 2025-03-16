import React from 'react'
import { useContext ,useRef} from 'react'
import {counterContext} from '../context/context'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';


const Previous = () => {
  let {prev,setprev} = useContext(counterContext);
  const handleDelete = ()=>{
    setprev(() => []); 
    localStorage.removeItem('prevItem');// Ensure state updates correctly
    console.log("Deleted all todos, current state:", prev); // Debugging log
  }
  
  
  return (
    <>
     <div className='  flex justify-center align-middle '>
     <div className='my-4 bg-yellow-200 w-1/2 text-center'>
     <div className='flex md:flex-row flex-col justify-around align-middle my-4'>
     <h2 className="text-sm sm:text-2xl  font-bold font-mono my-2 ">Know Your Deleated Tasks</h2>
     {prev.length>0&&<button className='text-sm sm:text-xl text-red-700 font-bold border border-black rounded-full p-2' onClick={handleDelete}>Delete all Previous Todos</button>}
     

     </div>
     
      {prev.length > 0 ? (
        
        prev.map((todo,index) => <div className='text-sm sm:text-xl my-4 flex ml-4' key={todo.id}>{index+1}. <p>{todo.todo}</p> </div>)
      ) : (
        <p className='text-sm sm:text-xl text-red-400 text-red-600 font-bold'>No previous todos available!!!</p>
      )}



      
     </div>
     

     </div>
    </>
  )
}

export default Previous
