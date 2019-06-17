import React from 'react'
import cn from 'classnames'
import {useAnimation} from '../../hooks/animation'
import {useCreated} from '../../hooks/created'
import * as component from '../component'

function Animation(props, ref){
  const {visible, removeWhenHidden} = props
  const newChildRef = React.useRef
  const childRef = (ref || newChildRef)
  const created = useCreated(childRef);
  const animation = useAnimation(!!visible, childRef)
  const element = props.children
  const hidden = animation === null && !visible
  if (!React.isValidElement(props.children)) return null;

  if ((!visible && !created) || (hidden && removeWhenHidden)) return null;
  const prefix = component.getComponentPrefix(props.name);
  const className = cn(element.props.className, {[`${prefix}-${animation}`]: !!animation})
  const style = {
    ...element.props.style,
    display: hidden && !removeWhenHidden ? 'none' : ''
  }
  return React.cloneElement(element, {className, style})
}
export default Animation