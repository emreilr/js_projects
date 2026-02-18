import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import shrekDriving from './assets/shrek1_driving.png'
import shrekHappy from './assets/shrek_happy1.png'
import interactionImg from './assets/Yeni.png'
import successBg from './assets/unnamed.jpg'
import flw from './assets/flw.png'
import flw1 from './assets/flw1.png'
import flw3 from './assets/flw3.png'
import flw4 from './assets/flw4.png'
import flw5 from './assets/flw5.png'
import './App.css'

const flowers = [flw, flw1, flw3, flw4, flw5]

function App() {
  const [scene, setScene] = useState('driving') // driving, interaction, success
  const [yesScale, setYesScale] = useState(1)

  useEffect(() => {
    // 6 seconds total for driving sequence 
    // 0-2s: Drive across
    // 2-4s: Re-enter from left
    // 4-6s: Stop in center and wait
    const timer = setTimeout(() => {
      setScene('interaction')
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  const handleNo = () => {
    setYesScale(prev => prev * 2)
  }

  const handleYes = () => {
    setScene('success')
  }

  return (
    <div className="app-container">
      {/* Background Scenery */}
      <div className="background-scenery">
        <div className="clouds"></div>
        <div className="road"></div>
      </div>

      <AnimatePresence mode="wait">
        {/* SCENE 1: DRIVING */}
        {scene === 'driving' && (
          <motion.div
            key="driving"
            className="scene-driving"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Car fades out as requested
            transition={{ duration: 1 }} // Slow fade
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <motion.img
              src={shrekDriving}
              alt="Shrek Driving"
              className="shrek-car"
              // Use percentage relative to container width, not viewport width
              initial={{ x: '-30%', opacity: 1 }}
              animate={[
                { x: '130%', transition: { duration: 2, ease: "linear" } }, // Pass 1: Exit right
                { x: '-30%', transition: { duration: 0.01 } }, // Instant teleport back left
                { x: '10%', transition: { duration: 2, ease: "easeOut" } } // Pass 2: Arrive center
              ]}
            />
          </motion.div>
        )}

        {/* SCENE 2: INTERACTION */}
        {scene === 'interaction' && (
          <motion.div
            key="interaction"
            className="scene-interaction"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Üst Alan: Karakterler burada hapsolur */}
            <div className="character-area">
              <motion.h1
                className="passed-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                PASSED
              </motion.h1>

              <motion.img
                src={interactionImg}
                alt="Interaction"
                className="interaction-img"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
            </div>

            {/* Alt Alan: Kart her zaman en altta kalır */}
            <motion.div
              className="dialog-card"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <h1 className="dialog-text">Ben yaptım sen de yapabilirsin değil mi?</h1>
              <div className="buttons-row">
                <motion.button
                  className="game-btn btn-yes"
                  animate={{ scale: yesScale }}
                  onClick={handleYes}
                >
                  Evet
                </motion.button>
                <motion.button
                  className="game-btn btn-no"
                  onClick={handleNo}
                >
                  Hayır
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )
        }
        {/* SCENE 3: SUCCESS */}
        {scene === 'success' && (
          <motion.div
            key="success"
            className="scene-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundImage: `url(${successBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.5 }}
              className="success-text"
            >
              Harikasın!
            </motion.h1>

            <motion.img
              src={shrekHappy}
              alt="Happy Shrek"
              className="shrek-happy"
              initial={{ scale: 0.5, y: 100 }}
              animate={{
                y: [0, -20, 0], // Reduced bounce range
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{
                y: { repeat: Infinity, duration: 0.6, ease: "easeInOut" },
                scale: { repeat: Infinity, duration: 0.6 }
              }}
            />

            <div className="flower-rain-container">
              {[...Array(30)].map((_, i) => { // Reduced count for mobile perf
                const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
                return (
                  <motion.img
                    key={i}
                    src={randomFlower}
                    className="flower-particle"
                    initial={{ y: -50, x: Math.random() * 100, rotate: 0 }} // x is relative to parent width (assumed px here but random*100 is small)
                    // Framer motion 'x' number is usually pixels.
                    // For responsive x, we need percentage string.
                    // Let's use left style instead.
                    animate={{ y: 800, rotate: 360 }} // 800px should clear screen
                    transition={{
                      duration: Math.random() * 2 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "linear"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      x: 0, // Reset x animation
                      width: `${Math.random() * 10 + 5}%` // Responsive width (5-15%)
                    }}
                  />
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
