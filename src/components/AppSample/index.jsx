import { useState } from 'react'
import viteLogo from '/vite.svg'

import clsx from 'clsx'
import * as cx from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={cx.wrapperContainer}>
      <div className={cx.logoContainer}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={cx.logo} alt="Vite logo" />
        </a>
      </div>
      <h1 className='heading-1'>Vite + React</h1>
      <div className={cx.cardContainer}>
        <button onClick={() => setCount((count) => count + 1)} className='btn-primary-large'>count is {count}</button>
        <p className='body'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={clsx(cx.readTheDocs, 'body')}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
