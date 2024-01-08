import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BigComponent from './component/BigComponent'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<BigComponent/>}/>
      </Routes>
    </div>
  )
}
