// Index.tsx
import React, { useContext } from 'react'
// 父组件
import { Context } from '../../App';

export function Index() {

  const { name } = useContext(Context);

  return (
    <div>
      Index { name }
    </div>
  )
}