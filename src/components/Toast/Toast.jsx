import React from 'react'
import ReactDOM from 'react-dom';
import * as component from '../component'
import Animation from '../Animation'
import {useTimingToggle} from '../../hooks/timer'
import Icon from '../Icon'
import './Toast.less'

/**
 * 
 * @param {} container 
 * @param {} type 
 * @param {} message 
 * @param {} duration 
 * @param {} closeable 
 * @param {} onClose 
 */
function Toast(props){
  const [visible, setVisible] = React.useState(true)
  const close = () => visible && setVisible(false)
  const timingEnd = useTimingToggle(false, props.duration, !visible)
  if(timingEnd) close()

  const type = 'toast'
  const prefix = component.getComponentPrefix(type)
  const cls = component.getCompnentClasses(type, props, {[`${prefix}-${props.type}`]: !!props.type})
  const handleLeave = () => {
    props.onClose && props.onClose();
  };

  return ReactDOM.createPortal(
    <Animation
      name="toast"
      visible={visible}
      removeWhenHidden={true}
      onLeave={handleLeave}
    >
      <div className={cls} style={props.style}>
        <span className="icon"><Icon name='info-circle' /></span>
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
Toast.warning = function(message, duration, closeable, onClose){
  return create({ type: 'warning', message, duration, closeable, onClose})
}
Toast.error = function(message, duration, closeable, onClose){
  return create({ type: 'error', message, duration, closeable, onClose})
}
Toast.success = function(message, duration, closeable, onClose){
  return create({ type: 'success', message, duration, closeable, onClose})
}
export default Toast
