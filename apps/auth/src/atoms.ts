import { atom } from 'recoil'

const currentUser = atom({
  key: 'currentUser',
  default: 'Current User Name'
})

export default {
  currentUser
}
