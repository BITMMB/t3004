import React, { useState } from 'react'
import { Radio } from 'antd'
import './Radio.css'
const RadioSelect = () => {
  const [value, setValue] = useState(1)
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Search</Radio>
      <Radio value={2}>Rated</Radio>
    </Radio.Group>
  )
}
export default RadioSelect
