import * as React from 'react'
import { useRecoilValue } from 'recoil'

import authAtoms from 'auth/atoms'

const Header = () => {
  const user = useRecoilValue(authAtoms.currentUser)

  return <h1>HEADER - {user}</h1>
}

export default Header
