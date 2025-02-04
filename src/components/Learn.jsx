import React from 'react'
import { SiTicktick } from "react-icons/si";

const Learn = () => {
  return (
    <div className="flex justify-center my-4 rounded ">
      <div className='container bg-yellow-200 flex justify-center align-middle rounded flex-col p-5 w-1/2'>
        <h2 className=' text-xl font-mono  m-5 underline text-center'>From Chaos to Clarity: Why Task Management Matters</h2>
        <p className='text-lg'>Ever felt like there’s too much to do and not enough time? The secret to staying on top of everything lies in organizing your tasks effectively. When you have a clear plan, you work smarter—not harder. Here’s how proper task management can transform your productivity and peace of mind:</p>
        <p className='mt-10'>
          <div className='flex gap-3'>
          <SiTicktick />
          <h3 className='relative bottom-1 text-xl'>Boosts Productivity</h3>
          </div>
          
          <p>Prioritizing tasks ensures you focus on what truly matters, helping you complete work more efficiently.</p>
        </p>
        <br />
        <p>
          <h3>Reduces Stress</h3>
          <p>A structured to-do list eliminates chaos, so you always know what needs to be done—no more last-minute panic!</p>
        </p>
        <br />
        <p>
          <h3>Improves Time Management</h3>
          <p>By identifying time-consuming tasks and scheduling them properly, you make the most of every minute.</p>
        </p>
        <br />
        <p>
          <h3>Enhances Decision-Making</h3>
          <p>Prioritizing tasks ensures you focus on what truly matters, helping you complete work more efficiently.</p>
        </p>
        <br />
        <p>
          <h3> Increases Focus</h3>
          <p>Fewer distractions mean deeper concentration—allowing you to produce high-quality work.</p>
        </p>
        <br />
        <p>
          <h3>Helps Achieve Goals</h3>
          <p>Breaking big goals into smaller, manageable steps keeps you on track and motivated.</p>
        </p>
        <br />
        <p>
          <h3>Optimizes Resources</h3>
          <p>Knowing how much time and effort each task requires helps you allocate resources efficiently.

            By taking control of your tasks, you take control of your success. Start organizing today, and watch how it transforms your workflow and mindset! </p>
        </p>
        <br />


      </div>
    </div>
  )
}

export default Learn
