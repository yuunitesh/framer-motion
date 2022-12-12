import { useState } from 'react'
import { motion } from "framer-motion"
import './App.css'

function App() {
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [rotateValue, setRotateValue] = useState(0)

  const onClick = () => {
    setXValue(Math.random()*1040 - 900)
    setYValue(Math.random()*600 - 300)
    setRotateValue(Math.random()*360)
  }

  return (
    <motion.div 
    animate={{
      x: xValue,
      y: yValue,
      rotate: rotateValue
    }} 
    transition= {{
      duration: .5,
      type: 'spring',
      bounce: 0.3
    }}
    onHoverStart={onClick}
    className="square">
    </motion.div>
  )
}

export default App
