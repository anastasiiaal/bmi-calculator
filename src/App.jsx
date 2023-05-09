import React from 'react'

import Calculator from './components/Calculator'
import Result from './components/Result'
import Tips from './components/Tips'
import Limitations from './components/Limitations'

export default function App() {

  return (
    <main>
      <h1>BMI calculator app 🥦</h1>
      <Calculator />
      <Result />
      <Tips />
      <Limitations />
    </main>
  )
}
