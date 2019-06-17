import React from 'react'
import ReactDOM from 'react-dom';
import * as component from '../component'
import Animation from '../Animation'
import {useTimingToggle} from '../../hooks/timer'
import './Toast.less'

function Toast(props){
  const [visible, setVisible] = React.useState(true)
  const close = () => visible && setVisible(false)
  const timingEnd = useTimingToggle(false, props.duration, !visible)
  if(timingEnd) close()

  const type = 'toast'
  const prefix = component.getComponentPrefix(type)
  const cls = component.getCompnentClasses(type, props, {[`${prefix}-${props.type}`]: !!props.type})
  console.log('cls', cls)
  return ReactDOM.createPortal(
    <Animation
      name="toast"
      visible={visible}
      removeWhenHidden={true}
    >
      <div className={cls} style={props.style}>
        <span className="icon">icon</span>
        <div className="msg">{props.message}</div>
      </div>
    </Animation>,
    props.container || document.body
  )
}

Toast.defaultProps = {
  type: 'info',
  duration: 30000,
  closeable: false
}

function create(props){
  const root = createToastRoot()
  const div = document.createElement('span')
  return ReactDOM.render(<Toast {...props} container={root} />, div)
}

function createToastRoot(){
  const prefix = component.getComponentPrefix('toast');
  const cls = prefix + '-root';
  let root = document.querySelector('.' + cls)
  if(!root){
    root = document.createElement('div')
    root.className = cls
    document.body.appendChild(root)
  }
  return root
}

Toast.info = function(message, duration, closeable, onClose){
  return create({ type: 'info', message, duration, closeable, onClose})
}
export default Toast
