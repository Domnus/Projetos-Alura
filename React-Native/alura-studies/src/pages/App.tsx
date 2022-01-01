import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import Cronometro from '../components/Cronometro'
import style from './App.module.scss'
import { ITarefa } from '../types/tarefa'
import { useState } from 'react'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  )
}

export default App
