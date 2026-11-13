export function Letter({ name, letter }) {
  return (
    <section className="kartochka kartochka-pisma">
      <span className="nadzagolovok">Письмецо</span>
      <h1>Для тебя ;)</h1>
      <div className="list-pisma">
        <p>{letter.greeting}</p>
        <p>{letter.message}</p>
        <p className="stroka-lyubvi">{letter.closing}</p>
        <p className="podpis">Твоя РаРа 💕</p>
      </div>
      <p className="korotkoe-primechanie">хехехе, Арзик :з
      </p>
    </section>
  )
}
