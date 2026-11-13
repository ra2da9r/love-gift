import { useState } from 'react'

export function Name({ onContinue }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim()) {
      setError('напиши кодовое имя, хехе :р')
      return
    }
    onContinue(name)
  }
  return (
    <section className="kartochka privetstvie">
      <span className="nadzagolovok">ХЕХЕХЕ</span>
      <h1>ПРИВЕТУЛЯ, КРАСОТУЛЯ</h1>
      <p className="vvedenie">ВВЕДИ КОДОВОЕ ИМЯ</p>

      <form className="forma" onSubmit={handleSubmit}>
        <label className="skrytoe-nazvanie" htmlFor="visitor-name">кодовое имя</label>
        <input
          id="visitor-name"
          autoComplete="given-name"
          placeholder="пиши с маленькой буквы"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            setError('')
          }}
        />
        {error && <p className="soobshchenie-oshibki" role="alert">{error}</p>}
        <button className="glavnaya-knopka" type="submit">💕 ВПЕРЁД 💕</button>
      </form>
      <p className="korotkoe-primechanie">Конечно, это чертов нейрослоп, который подкорректирован мною хаха, <br />
      НО я надеюсь тебе будет интересно </p>
    </section>
  )
}
