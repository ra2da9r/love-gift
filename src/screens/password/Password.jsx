import { useState } from 'react'

export function Password({ name, hasError, hint, riddle, onSubmit }) {
  const [password, setPassword] = useState('')
  const [edited, setEdited] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setEdited(false)
    onSubmit(password)
  }

  return (
    <section className="kartochka">
      <span className="nadzagolovok">хехе</span>
      <h1>ЗАПАРОЛИЛИ!!!!!!</h1>
      <p className="vvedenie">Осталось только узнать, прям чуть-чуть</p>
      <p className="podskazka">{hint}</p>
      <p className="zagadka"><strong>Загадка:</strong> {riddle}</p>

      <form className="forma" onSubmit={handleSubmit}>
        <label className="skrytoe-nazvanie" htmlFor="secret-password">ПАРОЛЬ</label>
        <input
          id="secret-password"
          type="password"
          autoComplete="off"
          placeholder="ПАРОЛЬ"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            setEdited(true)
          }}
        />
        {hasError && !edited && (
          <p className="soobshchenie-oshibki" role="alert">
            Попробуй ещё раз, у тебя обязательно получица!!! Ну либа напиши мне, я подскажу ;) <br /> Или нет)
          </p>
        )}
        <button className="glavnaya-knopka" type="submit">💕ДАЛЬШЕ💕</button>
      </form>
    </section>
  )
}
