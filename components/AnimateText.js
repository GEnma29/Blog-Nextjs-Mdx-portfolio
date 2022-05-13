import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heading } from '@chakra-ui/react'



//const motionSpan = motion('span')

const spanVariantes = {
  visible:{
    color:'gray.800'
  },
  tap:{
    color: 'gray.800'
  },
  hover: { 
    scale: 1.2,
    color: 'teal', 
  }
}

const AnimateText = ({ children }) => {
  const [word, setWrod] = useState("prueba")

  useEffect(() => {
    setWrod(children)

  }, [children])

  return (
    <Heading
    >{word.split('').map((letter, index) => (
    <motion.span 
    key={index} 
    variants={spanVariantes}
    initial={'visible'}
    whileHover={'hover'}
    whileTap={'tap'}
     >
       {letter}
     </motion.span>
     ))}
    </Heading>
  )
}

export default AnimateText
