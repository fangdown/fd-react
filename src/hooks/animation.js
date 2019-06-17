import { useState, useEffect} from 'react'

export function useAnimation (visibility, nodeRef) {
  const anim = visibility ? 'enter' : 'leave'
  const [animation] = useState(anim)
  useEffect(()=>{

  })
  return animation
}