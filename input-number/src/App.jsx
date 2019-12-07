import React, {useState} from 'react';
import InputNumber  from './InputNumber';

function App() {
  const [value, setValue] = useState(123)
  const handleChange = function(e) {
    setValue(e)
  }
  return (
    <div>
      受控<InputNumber value={value} onChange={handleChange} />
      非受控<InputNumber defaultValue={value} step={2} onChange={e => { }} />
    </div>
  )
}

export default App
