import * as React from 'react'
import { useSetRecoilState } from 'recoil'

import authAtoms from 'auth/atoms'

const LogoutButton = () => {
  const setCurrentUser = useSetRecoilState(authAtoms.currentUser)

  return <button onClick={() => setCurrentUser('')}>logout</button>
}

export default LogoutButton
