import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { store } from '../refactor/store'
import { useDispatch, useSelector  } from 'react-redux'
import { todos } from "../refactor/action"

let Todo = ()=>{
    let state = store.getState()

    let dispatch = useDispatch()
    let counter = useSelector((store)=> store.counter)

    let todoStore = useSelector((store)=>store.todos)
  
    let [todostate , settodo] = useState("")
    console.log(todostate)
  
    // let hnadlecount = ()=>{
    //   dispatch(addcount(1))
    // }
  
    // let handletodo = ()=>{
    //   dispatch(todos(todostate))
    // }
    
    let posttodo = async()=>{
  
      let payload = {
        title:todostate,
        status:"false"
      }
       try {
         let res = await fetch("http://localhost:8080/todos",{
           method:"POST",
           headers:{
             "content-type":"application/json"
           },
           body:JSON.stringify(payload)
         })
       } catch (error) {
          console.log(error)
       }
       getdata()
       settodo("")

    }

    useEffect(()=>{
        getdata()
      },[])
     
      let getdata = async()=>{
           try {
             let res = await fetch("http://localhost:8080/todos")
             let data = await res.json()
             dispatch(todos(data))
           } catch (error) {
             console.log(error)
           }
      }
    return (
        <div>
            <input value={todostate} onChange={e => settodo(e.target.value)} type="text" />
    <button onClick={posttodo}>ADD TODO</button>
    <h3>{todoStore.map(e => <Link  to={`/${e.id}`}><div>{e.id}-{e.title}<br/></div></Link>) }</h3> 
        </div>
    )
}
export default Todo