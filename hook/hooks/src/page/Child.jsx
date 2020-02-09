import React, { useState, useEffect } from 'react'
export default function Child () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('count:' + count)
    return () => {
      console.log('clear' + count)
    };
  }, [count])
  return (
    <div>
      <div>hooks状态:{count}</div>
      <div onClick={() => { setCount(count + 1) }}>add</div>
    </div>
  )
}