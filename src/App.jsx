import { useState, useEffect } from 'react'
import style from './App.module.css'
import { apiRick } from './api/api'

function App() {
  const [data, setData] = useState([])
  const [erro, setErro] = useState(false)

  useEffect(() => {
    apiRick.get(`/character`).then((response) => {
      setData(response.data.results)
    }).catch((error) => {
      console.error("Sua requisição falhou", error)
    })
  }, [])

  return (
    <>
      
      <div className={style.container}>
        <h1>Rick and morty Api </h1>
        <br />

        <div className={style.wrapCards}>
          {data.map((item, index) => {
            return (
              <div key={index} className={style.cards}>
                <img src={item.image} alt={item.name} width={200} height={200} style={{borderRadius: "999px"}}/>
                <h1>{item.name}</h1>
              </div>
            )
          })}
        </div>
      </div>


    </>
  )
}

export default App
