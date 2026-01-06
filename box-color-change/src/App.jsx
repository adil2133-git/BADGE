import { useState } from "react"


function App() {

  const totalBoxes = 10
  const [activeBoxes, setActiveBoxes] = useState([])
  const [isReversing, setIsReversing] = useState(false)

  const handleClick = (index) => {
    if(isReversing) return
    if(activeBoxes.includes(index)) return

  const update = [...activeBoxes, index]
  setActiveBoxes(update)
  if(index===totalBoxes - 1){
    startReverse(update)
  }
  }

  const startReverse = (a) => {
    setIsReversing(true)
    let stack = [...a]

    const interval = setInterval(() => {
      stack.shift()
      setActiveBoxes([...stack])
      if(stack.length === 0) {
        clearInterval(interval)
        setIsReversing(false)
      }
    },300)
  }

  const container = {
    display: "flex",
    width: "fit-content",
    border: "5px solid black",
    gap: "20px"
  }

  const boxStyle = {
    width: "50px",
    height: "50px"
  }

  return (
    <div style={container}>
      {Array.from({length: totalBoxes}).map((_, index) => (
        <div key={index} 
        onClick={() => handleClick(index)}
        style={{...boxStyle, backgroundColor: activeBoxes.includes(index) ? "red" : "white"}} />
      ))}
    </div>
  )
}

export default App
