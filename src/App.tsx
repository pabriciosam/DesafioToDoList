import { Header } from './components/Header'
 import { Body } from './components/Body'
import './global.css'
import styles from './App.module.css'
import { AddTask } from './components/AddTask'
import { ListTask } from './components/List'

const propList = [
  {
    id: 1,
    tarefa: "Minha tarefa",
    concluida: false
  },
  {
    id: 2,
    tarefa: "Segunda tarefa",
    concluida: false
  },
  {
    id: 3,
    tarefa: "Terceira tarefa",
    concluida: true
  }
]

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.wrapper}>
        <AddTask></AddTask>
      </div>

      <div className={styles.header}>
        <label className={styles.criadas}>Tarefas criadas</label>  
        <label className={styles.concluidas}>Concluídas</label>  
      </div>

      {
        //<Body></Body>

        propList.map(p => {
          return(
              <ListTask 
                id={p.id}
                tarefa={p.tarefa}
                concluida={p.concluida}
              />
            )
          }
        )
      }
    </div>
  )
}

export default App