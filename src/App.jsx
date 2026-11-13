import { useSelector } from 'react-redux'
import { LetterScreen } from './screens/letter/LetterScreen.js'
import { NameScreen } from './screens/name/NameScreen.js'
import { PasswordScreen } from './screens/password/PasswordScreen.js'
import './css/App.css'

function App() {
  const screen = useSelector((state) => state.gift.screen)

  return (
    <main className="prilozhenie">
      {screen === 'name' && (
        <NameScreen />
      )}
      {screen === 'password' && (
        <PasswordScreen />
      )}
      {screen === 'letter' && (
        <LetterScreen />
      )}
    </main>
  )
}

export default App
