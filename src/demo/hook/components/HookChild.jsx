import React, {useState} from 'react'

function HookChild(props){
  console.log('props', props)
  return (
    <>
      <div>子组件
        <button onClick={() => props.handleClick()}>点击</button>
      </div>
      <div>22</div>
    </>
  )
}
export default HookChild