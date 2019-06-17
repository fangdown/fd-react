import cx from 'classnames'
const perfix = 'fd'
/**
 * 组件类型
 * @param type 类型
 */
export function getComponentPrefix(type){
  return `${perfix}-${type}`
}

/***
 * 组件样式
 */
export function getCompnentClasses(type, props, ...classes){
  const main = getComponentPrefix(type)
  return cx(
    main,
    {
      [`${main}-sm`]: props.size === 'small',
      [`${main}-lg`]: props.size === 'large',
      [`${main}-disabled`]: !!props.disabled,
    },
    ...classes,
    props.className
  )
}