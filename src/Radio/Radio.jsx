import React, { useState } from 'react'
import './Radio.css'

function RadioSelect({ radio }) {
  const [value, setValue] = useState(1)

  function chengeValue(e) {
    setValue(e.target.value)
    radio(e.target.value)
  }

  return (
    <div className="radio">
      <label className={value == '1' ? 'radio__label--checked' : 'radio__label'}>
        Search
        <input className="radio__input" type="radio" name="radio" value="1" onChange={chengeValue}></input>
      </label>
      <label className={value == '1' ? 'radio__label' : 'radio__label--checked'}>
        Rated
        <input className="radio__input" type="radio" name="radio" value="2" onChange={chengeValue}></input>
      </label>
    </div>
  )
}

export default RadioSelect
