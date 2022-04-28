import { nanoid } from "nanoid"



export const ADD_COUNT = "ADD_COUNT"


export const ADD_TODO ="ADD_TODO"

export const DELETE_TODO = "DELETE_TODO"

export const addcount = (data)=>{
    return{
        type:ADD_COUNT,
        payload:data
    }
}

var count = 1
export let todos =(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}

export let deleteTodo = (key)=>{
    return {
        type:DELETE_TODO,
        payload:key
    }
}
