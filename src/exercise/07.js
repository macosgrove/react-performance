// Production performance monitoring
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'
import reportProfile from '../report-profile'
import {Profiler} from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <div>
      <Profiler id={'counter'} onRender={reportProfile}>
        <div>
          Profiled counter
          <Counter />
        </div>
      </Profiler>
      <div>
        Unprofiled counter
        <Counter />
      </div>
    </div>
  )
}

export default App
