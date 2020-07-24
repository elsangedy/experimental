import * as React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import authAtoms from 'auth/atoms'

const LogoutButton = () => {
  const isAuthenticated = useRecoilValue(authAtoms.isAuthenticated)
  const setCurrentUser = useSetRecoilState(authAtoms.currentUser)

  if (!isAuthenticated) {
    return null
  }

  return <button onClick={() => setCurrentUser('')}>logout</button>
}

export default LogoutButton
