import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { store } from './refactor/store'
import { useDispatch, useSelector  } from 'react-redux'
import { addcount, todos } from './refactor/action'
import { nanoid } from 'nanoid'
import { Link, Route, Routes } from 'react-router-dom'
import Todo from './components/todo'
import TodoDetails from './components/tododetails'


function App() {




  return (
    <div className="App">
    {/* <h3>Counter : {counter}</h3>
    <button onClick={hnadlecount}>ADD 1</button> */}
   <Routes>
     <Route path='/' element={<Todo></Todo>}></Route>
     <Route path='/:id' element={<TodoDetails></TodoDetails>}></Route>
   </Routes>

  
   
    </div>

    
  )
}

export default App
