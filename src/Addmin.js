import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { Login } from './pages'
export const Addmin = ({element}) => {
  const navigate = useNavigate()
  const login = true
  useEffect(()=> {!Login && navigate("./Login")},[])
  return login ? element : <h1>Error</h1>
  // useEffect(()=>{
  //   if(!login && ){
  //     navigate("/Login")
  //   }
  // },[])
  // if(login){
  //   return element
  // }else{
  //   return <h1>error</h1>
  // }
}

