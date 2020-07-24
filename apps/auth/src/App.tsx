import * as React from 'react'
import { RecoilRoot } from 'recoil'

import Login from './Login'

const App = () => {
  return (
    <RecoilRoot>
      <Login />

      <hr />

      <h2>Login app!</h2>
    </RecoilRoot>
  )
}

export default App
