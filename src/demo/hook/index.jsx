import React, {useState, useEffect} from 'react'
import HookChild from './components/HookChild'

function HookDemo(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title = `You clicked ${count} times`
  })
  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={handleCount}>点击我</button>
      <HookChild name="fang" handleClick={handleCount }/>
    </div>
  )
}
export default HookDemo