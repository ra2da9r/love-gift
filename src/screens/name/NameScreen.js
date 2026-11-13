import { createElement } from 'react'
import { useDispatch } from 'react-redux'
import { Name } from './Name.jsx'
import { saveName } from '../../features/gift/giftSlice.js'

export function NameScreen() {
  const dispatch = useDispatch()
  return createElement(Name, {
    onContinue: (value) => dispatch(saveName(value)),
  })
}
