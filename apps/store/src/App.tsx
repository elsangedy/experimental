import React from 'react'
import { RecoilRoot } from 'recoil'

import LogoutButton from './LogoutButton'

const Login = React.lazy(() => import('auth/Login'))
const Header = React.lazy(() => import('header/Header'))

export default () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>

      <hr />

      <React.Suspense fallback={<div />}>
        <Login />
      </React.Suspense>

      <hr />

      <h2>Store app!</h2>

      <LogoutButton />
    </RecoilRoot>
  )
}
