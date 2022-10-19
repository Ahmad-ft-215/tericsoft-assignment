import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from '../Authentication/SignIn'
import SignUp from '../Authentication/SignUp'
import Bmi from '../BMI/Bmi'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<SignIn/>} />
            <Route path='/' element={<SignUp/>} />
            <Route path='/bmi' element={<Bmi/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes