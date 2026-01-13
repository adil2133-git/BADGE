import { useState } from "react"


function App() {

  const [selectedItems, setSelectedItems] = useState([])
  // const [selectOption, setSelectOption] = useState(false)

  const list = [
    {id:1, value:"GO"},
    {id:2, value:"MERN"},
    {id:3, value:"MEAN"},
    {id:4, value:"DA"}
  ]

  const handleCheckBoxChange = (item, isChecked) => {
    setSelectedItems((prev) => 
      isChecked
        ? [...prev, item]
        : prev.filter((i) => i.id !== item.id)
    )
  }

  

  return (
    <div>
      {/* <button onClick={() => setSelectOption(!selectOption)}>Select Option</button> */}
      <h2>Options</h2>
      {/* {selectOption &&  */}
        {list.map((item) => (
          <li key={item.id}>
            <input 
            type="checkbox"
            checked={selectedItems.some((i) => i.id === item.id)}
            onChange={(e) => handleCheckBoxChange(item, e.target.checked)} />
            {item.value}
          </li>
        ))
      }

      <h2>Selected Items</h2>
      {selectedItems.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  )
}

export default App
