import { useState } from 'react'
import './App.css'
import {ValoresInputs} from "./ValoresInputs"
function App() {
const[resultado,setResultado] = useState(0)
const [input1, setInput1] = useState(0)
const[input2, setInput2] = useState(0)

  return (
    <>
<input
onChange={(event)=>{ setInput1(Number(event.target.value)) }}
type="number"
placeholder='digite um numero'
value={input1}
/>
 <input 
 onChange={(event)=>{setInput2(Number(event.target.value)) }}
 type="number" 
 placeholder='digite outro numero' 
 value={input2}
 />
    <button
onClick={()=>{
setResultado(input1+input2)
}}
>
      Somar
    </button>

    <button
onClick={()=>{
setResultado(input1-input2)
}}
>
      Subtrair
    </button>

    <button
onClick={()=>{
setResultado(input1*input2)
}}
>
      Multiplicar
    </button>

    <button
onClick={()=>{
setResultado(input1/input2)
}}
>
      Dividir
    </button>
<ValoresInputs
nome='tomatao'
valor={input1}
/>

<ValoresInputs
nome='batatao'
valor={input2}
/>
    <h1>
Resultado é: { resultado }
    </h1>
    </>
  )
}

export default App
