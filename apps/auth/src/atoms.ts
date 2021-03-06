import { atom, selector } from 'recoil'

const currentUser = atom({
  key: 'currentUser',
  default: ''
})

const isAuthenticated = selector({
  key: 'isAuthenticated',
  get: ({ get }) => {
    const user = get(currentUser)
    const authenticated = !!user && user !== ''
    return authenticated
  }
})

export default {
  currentUser,
  isAuthenticated
}
