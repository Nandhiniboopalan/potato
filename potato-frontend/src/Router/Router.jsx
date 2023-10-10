import React from 'react';
import Sidebar from '../Components/Sidebar';
import HomePage from '../Pages/HomePage';
import {Route,Routes} from 'react-router-dom';
import Profile from '../Pages/Profile';
const Router = () => {
  return (
    <div className='flex'>
        <div className='w-[20%] border border-1-slate-500 pl-10'>
            <Sidebar />
        </div>
        <div className='w-full'>
            <Routes>
                <Route path="/Home" element={<HomePage/>} ></Route>
                <Route path="/username" element={<Profile/>} ></Route>
            </Routes>
        </div>
    </div>
  )
}
export default Router;