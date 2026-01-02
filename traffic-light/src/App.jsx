import { useEffect, useState } from "react"

const lights = [
  {color:"red",duration:4000},
  {color:"yellow",duration:3000},
  {color:"green",duration:2000},
]

function App() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % lights.length);
    },lights[index].duration)

    return () => clearTimeout(timer)
  },[index])
  return (
    <div style={{background: "black", width: 60, padding: 6, marginLeft: 700}}>
      {lights.map((light, i) => (
        <div 
        key={light.color}
        style={{
            backgroundColor: i === index ? light.color : "white",
            width: 50,
            height: 50,
            borderRadius: "50%",
            marginBottom: 5,
          }}/>
      ))}
    </div>
  )
}

export default App
