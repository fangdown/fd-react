import React from 'react'
import Toast from './Toast';
import './demo.less'

function ToastDemo () {
  return (
    <div onClick={()=> Toast.info('这是toast信息')}>点击我toast</div>
  )
}
export default ToastDemo