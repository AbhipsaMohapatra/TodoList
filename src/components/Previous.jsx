import React from 'react'
import { useContext ,useRef} from 'react'
import {counterContext} from '../context/context'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';


const Previous = () => {
  let {prev} = useContext(counterContext);
  
  
  return (
    <>
     <div className='  flex justify-center align-middle '>
     <div className='my-4 bg-yellow-200 w-1/2 text-center'>
      <h2 className="text-xl font-bold font-mono my-2">Know Your Deleated Tasks</h2>
      {prev.length > 0 ? (
        
        prev.map((todo,index) => <p className='text-xl my-4' key={todo.id}>{index+1}.  {todo.todo}</p>)
      ) : (
        <p>No previous todos</p>
      )}



      
     </div>
     

     </div>
    </>
  )
}

export default Previous
