import React, { useState, useEffect } from 'react'
import { Button, Notify } from 'zent'

export interface IAppProps {}

export function Counter(props: IAppProps) {
  const [counter, setCounter] = useState(0)

  const handleSetCounter = number => () => {
    setCounter(number)
  }

  return (
    <div>
      <div>{counter}</div>
      <Button onClick={handleSetCounter(counter + 1)} type="primary">
        +1
      </Button>
      <Button type="primary" onClick={handleSetCounter(counter - 1)}>
        -1
      </Button>
      <Button type="danger" onClick={handleSetCounter(0)}>
        reset
      </Button>
    </div>
  )
}
