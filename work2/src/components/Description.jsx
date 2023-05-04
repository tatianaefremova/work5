import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
    <div>
   {/* <div>Description</div>

    <motion.img
    width={'20%'}
    src='/img/icon.png'
    alt=''

    //анимация
    animate={{rotate:360}}
    transition={{
      delay:2,
      duration: 5,
      repeat: Infinity,
      repeatDelay: 0.5,
      repeatType:'reverse',
      type:'tween'
    }}
    />

    <motion.p
    initial={{
      x:-1000,
      opacity:0

    }}
    animate={{
      x:500,
      opacity:1
    }}
    transition={{
      delay:1,
      duration: 2,
      type:'tween'
    }}
    >
      Текст, который появится
  </motion.p> */} </div>
  <motion.div id='div1'

  initial={{
    x:-1000,
    opacity:0
  }}

  animate={{
    x:0,
    opacity:1
  }}
  transition={{
    delay:1,
    duration:2
  }}
  >Framer Motion is a simple yet powerful motion library for React.

  It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed.</motion.div>

  <motion.div id='div2'
  initial={{
    opacity:0,
  }}

  animate={{
    y:0,
    opacity:1,
  }}

  transition={{
    delay:1,
    duration:2
  }}>
    <motion.img
     src='img/banner-new.jpeg'
     className='banner'
     width={650}
     initial={{
      opacity:0.6
     }}
     transition={{
      duration:5
     }}
     whileTap={{rotate:360}}/>
  </motion.div>

<div id='divImg'>
  <motion.div id='div3'
  initial={{
    opacity:0,
    scale:0.5,
  }}
  animate={{
    opacity:1,
    scale:1,
  }}
  transition={{
    duration:2
  }}>
    <motion.img
     src='img/ball.jpg'
     className='ball'
     width={200}
     initial={{
      opacity:0.6
     }}
     transition={{
      duration:5
     }}

     whileHover={{
      scale:1.5,
      transition:{
        duration:2
      }
     }}/>
  </motion.div>

  <motion.div id='div4'
  initial={{
    opacity:0,
    scale:0.5,
  }}
  animate={{
    opacity:1,
    scale:1,
  }}
  transition={{
    duration:2
  }}>
    <motion.img drag='x'
     src='img/ball.jpg'
     className='ball'
     width={200}
     initial={{
      opacity:0.6
     }}
     transition={{
      duration:5
     }}

     whileDrag={{
      scale:1.5,

      }
     }/>
  </motion.div>

  <motion.button className='btn btn-primary'
  whileHover={{
    scale:1.2
  }}>
  Нажми
  </motion.button>
  </div>
  <motion.div id='div5'

  initial={{
    x:-1000,
    opacity:0
  }}

  animate={{
    x:0,
    opacity:1
  }}
  transition={{
    delay:1,
    duration:2
  }}>
    Set a value as an array and Motion will animate through each of these values in turn.

    By default, each keyframe will be spaced evenly throughout the animation, but the exact timing and easing can be configured via the transition property.
  </motion.div>
  <div></div>
  <motion.div id='div6'>
  <motion.img
     src='img/2.jpg'
     className='banner'
     width={450}
     initial={{
      opacity:0.5
     }}
     transition={{
      duration:5
     }}
     animate={{
      opacity:1,
      scale:1,
    }}/>
    </motion.div>

 
    </div>
  )
}

export default Description