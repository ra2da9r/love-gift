import { createElement } from 'react'
import { useSelector } from 'react-redux'
import { LETTERS_BY_NAME } from '../../features/gift/giftSlice.js'
import { Letter } from './Letter.jsx'

export function LetterScreen() {
  const name = useSelector((state) => state.gift.name)
  const letter = LETTERS_BY_NAME[name.toLocaleLowerCase()]
  return createElement(Letter, { name, letter })
}
