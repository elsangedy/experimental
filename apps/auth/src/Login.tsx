import * as React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import atoms from './atoms'

const Profile = React.memo(() => {
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
})

const LoginForm = React.memo(() => {
  const setCurrentUser = useSetRecoilState(atoms.currentUser)

  return (
    <div>
      <h1>LOGIN</h1>

      <button onClick={() => setCurrentUser('Current User')}>login</button>
    </div>
  )
})

const Login = () => {
  const isAuthenticated = useRecoilValue(atoms.isAuthenticated)

  if (isAuthenticated) {
    return <Profile />
  }

  return <LoginForm />
}

export default Login
