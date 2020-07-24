import * as React from 'react'
import { useRecoilState } from 'recoil'

import atoms from './atoms'

const Login = () => {
  const [currentUser, setCurrentUser] = useRecoilState(atoms.currentUser)
  const [newName, setNewName] = React.useState('')

  return (
    <div>
      <h1>LOGIN</h1>

      <div>
        <span>Current user:</span>
        <strong>{currentUser}</strong>
      </div>

      <div>
        <input placeholder="New name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button onClick={() => setCurrentUser(newName)}>change name</button>
      </div>
    </div>
  )
}

export default Login
