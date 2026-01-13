import { useEffect, useState } from 'react'

function App() {
  const [running, setRunning] = useState(false)
  const [forward, setForward] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(!running) return;

    const interval = setInterval(() => {
      setCount((prev) => (forward ? prev + 1 : prev - 1))
    },1000)

    return () => clearInterval(interval)
  },[forward, running])
  return (
    <div>
      <h1>Timer</h1>

      <div>{count}</div>

      <div>
        <button onClick={() => {
          setForward(true)
          setRunning(true)
        }}>Forward</button>

        <button onClick={() => {
          setRunning(false)
        }}>Stop</button>

        <button onClick={() => {
          setRunning(true)
          setForward(false)
        }}>Backward</button>
      </div>

      
    </div>
  )
}

export default App
