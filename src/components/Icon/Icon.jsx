import React from 'react'
import * as component from '../component'
import './Icon.less'
/**
 * 
 * @param {string} name 
 * @param {boolean} spin 
 * @param {number} size 
 * @param {function} onClick 
 */
function Icon(props){
  const type = 'icon'
  const prefix = component.getComponentPrefix(type)
  const cls = component.getCompnentClasses(
    type,
    {...props, size: 'normal'},
    {
      [`${prefix}-${props.name}`]: !!props.name,
      spin: !!props.spin
    }
  )
  const style = {...props.style}
  if(props.size) style['fontSize'] = props.size
  return (<i className={cls} style={style} onClick={props.onClick}></i>)
}
Icon.defaultProps = {
  spin: false
}
export default Icon