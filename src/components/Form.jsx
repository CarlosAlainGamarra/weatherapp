import '../styles/Form.css'
import { useState } from "react"

export function Form({ sendCity }) {
  const [city, setCity] = useState('');

  function inputEntry(e) {
    const value = e.target.value
    if(value !== '')
    setCity(value)
  }

  function handleSubmit(e){
    e.preventDefault()
    sendCity(city)
    setCity('')
  }

  return (
    <form 
      className='form-container'
      onSubmit={handleSubmit}
    >
      <input
        className='input' 
        type='text'
        placeholder='City...'
        onChange={inputEntry}
      />
    </form>
  )
}
