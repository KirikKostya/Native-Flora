import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './MainFieldComponents/Main'

export default function Router_2() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Main' element={<Main />}/>
        </Routes>
    </BrowserRouter>
  )
}
