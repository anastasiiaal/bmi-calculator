import React from 'react'

import Frontpage from './components/Frontpage'
import Result from './components/Result'
import Tips from './components/Tips'
import Limitations from './components/Limitations'

import tips from "./tips"
import limits from "./limitations"

export default function App() {
  return (
    <main>
      <Frontpage />
      <Result />
      <Tips tips={tips} />
      <Limitations limits={limits} />
    </main>
  )
}
