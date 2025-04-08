import { useState } from 'react'
import InputComponent from './component/Inputcomponent'
import './App.css'
import ButtonComponent from './component/ButtonComponent'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  return (
    <div className="App">
      <InputComponent type="text" placeholder="Name" value={name} onChange={setName} />
      <InputComponent type="email" placeholder="Email" value={email} onChange={setEmail} />
      <InputComponent type="password" placeholder="Password" value={password} onChange={setPassword} />
      <InputComponent type="number" placeholder="Age" value={age} onChange={setAge} />
      <ButtonComponent name="Submit" onClick={() => { }} />
      <ButtonComponent name="Reset" onClick={() => { }} />
    </div>
  )
}

export default App
