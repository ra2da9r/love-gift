import { createElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Password } from './Password.jsx'
import { checkPassword, getPasswordClue } from '../../features/gift/giftSlice.js'

export function PasswordScreen() {
  const dispatch = useDispatch()
  const { name, passwordError: hasError } = useSelector((state) => state.gift)
  const { hint, riddle } = getPasswordClue(name)

  return createElement(Password, {
    name,
    hasError,
    hint,
    riddle,
    onSubmit: (value) => dispatch(checkPassword(value)),
  })
}
