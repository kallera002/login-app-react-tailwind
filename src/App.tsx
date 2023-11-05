import { useState } from 'react'
import {AnimationWrapper} from './modules/common/components'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-screen bg-slate-200'>
      <Outlet />
    </div>
  )
}

export default App
