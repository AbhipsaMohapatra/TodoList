import { useState, useEffect, useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { counterContext } from './context/context';

import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Footer from './components/Footer';
import Learn from './components/Learn';
import Previous from './components/Previous';
function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [finished, setfinished] = useState(true);
  const { prev, setprev } = useContext(counterContext);

  useEffect(() => {

    let string = JSON.parse(localStorage.getItem("todos"));
    if (string) {

      let savedTodos = string;
      setTodos(savedTodos);
    }


  }, [])
  useEffect(() => {
    let st = JSON.parse(localStorage.getItem("prevItem")) || [];
    if (st) {
      setprev(st);
    }

  }, [])
  // function localsave(){
  //   localStorage.setItem("todos",JSON.stringify(todos));


  // }
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));

    }
  }, [todos])
  useEffect(() => {
    if (prev.length > 0) {
      localStorage.setItem('prevItem', JSON.stringify(prev));

    }
  }, [prev]);



  let handleChange = (e) => {
    setTodo(e.target.value);
  }
  let handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleated: false }]);
    setTodo("");


  }
  let handleCheckbox = (e) => {
    let id = e.target.name;

    let index = todos.findIndex((item) => {
      return item.id === id;
    })
    if (index === -1) return; // Exit if not found

    console.log(index);
    let Newtodos = [...todos];
    Newtodos[index].isCompleated = !(Newtodos[index].isCompleated);
    setTodos(Newtodos);


    console.log(Newtodos);
  }
  let handleDelete = (id) => {
    let allow = prompt("Are you sure you want to delete it type yes or no");
    if (allow.toLowerCase() === "yes") {
      let prevtodo = todos.filter(item => {
        return item.id === id;
      })

      let newtodos = todos.filter(item => {
        return item.id !== id;

      });
      let addtodoToPrev = todos.find(item =>
        item.id === id
      )
      if (addtodoToPrev) {
        setprev(prev => [...prev, addtodoToPrev])
      }
      console.log(addtodoToPrev);

      setTodos(newtodos);
      setfinished(prevtodo);
      localStorage.setItem('todos', JSON.stringify(newtodos));
      localStorage.setItem('prevItem', JSON.stringify(prev));



    }

  }
  let handleEdit = (id) => {
    let t = todos.filter((item) => {
      return item.id === id;
    })
    setTodo(t[0].todo);
    let newtodos = todos.filter(item => {
      return item.id !== id;

    });
    setTodos(newtodos);
    localStorage.setItem('todos', JSON.stringify(newtodos));


  }
  let handleToggle = (e) => {
    setfinished(!finished);
  }


  return (
    <>

      <Navbar />
      <div className="container rounded-md bg-yellow-200 mx-auto my-4 p-4 min-h-lvh shadow-black">
        <h2 className='font-bold text-indigo-950 text-2xl text-center underline my-2 mb-3'>
          iTasks - Organize Your Tasks Efficiently
        </h2>
        <div>
          <h3 className='text-2xl underline-offset-1 font-bold rounded-3xl underline'>Add Todo</h3>
          <input
            type="text"
            onChange={handleChange}
            name="todo"
            value={todo}
            className='border border-black bg-yellow-200 my-9 w-3/5 h-10 p-4 text-black rounded-3xl'
            placeholder='Enter Your Task'
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 2}
            className="btn bg-gray-800 text-white rounded p-2 w-16 cursor-pointer hover:bg-red-700 mx-3"
          >
            ADD
          </button>
        </div>
        <input className='cursor-pointer h-5 w-5' onChange={handleToggle} type="checkbox" checked={finished} />
        <span className='mx-2 text-xl'>Finished Todos</span>
        <h2 className='text-2xl font-bold underline my-5'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <p>No Todos Available</p>}
          {todos.map(item => (
            (finished || !item.isCompleated) &&
            <div key={item.id} className="todo flex my-4 align-middle justify-between text-xl w-4/5">
              <input
                onChange={handleCheckbox}
                type="checkbox"
                className='h-6 w-6 cursor-pointer'
                checked={item.isCompleated}
                name={item.id}
              />
              <div className={item.isCompleated ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons md:flex">
                <button
                  onClick={() => handleEdit(item.id)}
                  className='hover:bg-red-700 bg-gray-800 text-white rounded mx-5 p-1 w-8 cursor-pointer'
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='hover:bg-red-700 bg-gray-800 text-white rounded mx-5 p-1 w-8 text-lg cursor-pointer'
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

    </>
  );
}





function App() {
  const [prev, setprev] = useState([]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Todolist /></>
    },

    {
      path: '/learn',
      element: <><Navbar /><Learn /><Footer /></>


    },
    {
      path: '/previous',
      element: <><Navbar /><Previous /></>
    }
  ])







  return (
    <>
      <counterContext.Provider value={{ prev, setprev }}>
        <RouterProvider router={router} />
      </counterContext.Provider>

    </>
  )
}

export default App
