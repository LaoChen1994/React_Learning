### React Hooks

本文参考主要博文:

[阮一峰老师的 React-hooks 教程](http://www.ruanyifeng.com/blog/2019/09/react-hooks.html)

[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

[useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

[React-hooks 的官方文档](https://zh-hans.reactjs.org/docs/hooks-effect.html)

**React hooks 的主要功能是让函数式组件能够模拟出自身的状态 state 和生命钩子函数**

常用的 React Hooks 函数包括

- useState
- useEffect
- useContext
- useReducer

### 1. useState

useState 主要是创建一个 state 变量并赋予初始值

通过数组解构的方式来获取 state 变量和一个改变该变量的函数

```javascript
import React, { useState, useEffect } from 'react'
import { Button, Notify } from 'zent'

export function Counter(props) {
  // 这里的counter为state中的一个值且其初始值为0
  const [counter, setCounter] = useState(0)

  const handleSetCounter = number => () => {
    // 通过调用setCounter可以实现对于counter的赋值
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
```

### 2. useEffect

- useEfffect 的执行一般在页面渲染之后 -> React 保证了每次 effect 的执行都在页面的 DOM 更新完毕之后！
- useEffect 一般放在函数内部，这样可以直接完成对 state 和更改 state 函数的调用方法
- useEffect 的第一个参数为一个函数，用来作为每次渲染完成后执行的回调函数 effect，通过 return 一个函数来作为清除操作时调用的函数(组件卸载的时候调用)

#### 可能存在的问题

这里可能会有一个问题　如果当我们在 useEffect 中调用了改变 state 那可能又会渲染这个函数, 再调用 effect 函数可能就会出现循环调用的问题

#### 解决办法

**通过 useEffect 函数中的第二个参数来解决**

我们可以通过 useEffect 中的第二个参数来设置，该 effect 函数只在特定的某个参数进行变动的时候才会执行

<font color=red>这里要注意的是，如果第二个参数为[]说明该函数在任何参数变动的时候都不执行，则该函数只在一开始初始化 render 的时候执行一次，所以代表的是 componentDidMount 这个钩子函数</font>
