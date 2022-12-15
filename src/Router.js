import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Info from './PreviewComponents/Info.js'
import AboutUs from './PreviewComponents/AboutUs.js'
import OurServices from './PreviewComponents/OurServices.js'
import Contact from './PreviewComponents/Contact.js'
import SignIn from './PreviewComponents/SignIn.js'
import SignUp from './PreviewComponents/SignUp.js'
import Priview from './PreviewComponents/Priview.js'


export default function Router({setStep}) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Priview />}/>
        </Routes>
        
        <Routes>
            <Route path='/Info' element={<Info />}/>
        </Routes>
        
        
        <Routes>
            <Route path='/AboutUs' element={<AboutUs />}/>
        </Routes>

        <Routes>
            <Route path='/OurServices' element={<OurServices />}/>
        </Routes>

        <Routes>
            <Route path='/Contact' element={<Contact />}/>
        </Routes> 

        <Routes>
            <Route path='/SignIn' element={<SignIn setStep={setStep}/>}/>
        </Routes>

        <Routes>
            <Route path='/SignUp' element={<SignUp />}/>
        </Routes> 
    </BrowserRouter>
)
}
