import * as React from 'react'
import { RecoilRoot } from 'recoil'

import Header from './Header'

const App = () => {
  return (
    <RecoilRoot>
      <Header />

      <hr />

      <h2>Header app!</h2>
    </RecoilRoot>
  )
}

export default App
