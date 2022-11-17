import { useState } from "react"

function FunctionForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    return ( <form>  
        <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <label htmlFor="age">
            Idade:
            <input 
            type="number" 
            name="age"
            id="age" 
            onChange={({target})=>setAge(target.value)}
            />
          </label>
        </label>
      </fieldset>
    </form>);
}

export default FunctionForm