import { Routes, Route } from "react-router-dom"
import { UserCreate } from "./Components/UserCreate"
import {  UserList  } from "./Components/UserList"
import { UserEdit } from "./Components/UserEdit"

export const UserRouter = () => 
{
    return (
        <Routes>
            <Route path="/" element={<UserList/>}/> 
            <Route path="/create" element={<UserCreate/>} />
            <Route path="/edit/:user_id" element={<UserEdit/>} />          
        </Routes>
    )
}