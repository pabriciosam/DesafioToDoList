import { Header } from './src/components/Header'
 import { Body } from './src/components/Body'
import './src/global.css'
import styles from './src/App.module.css'
import { AddTask } from './src/components/AddTask'
import { ListTask } from './src/components/List'

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
  const possuiTarefas = propList.length > 0;

  function handleAddTask(){

  }

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.wrapper}>
        <AddTask task="" onAddTask={handleAddTask}></AddTask>
      </div>

      {
        possuiTarefas ? 
          <div className={styles.header}>
            <label className={styles.criadas}>Tarefas criadas</label>  
            <label className={styles.concluidas}>Concluídas</label>  
          </div>
          :
          <Body></Body>
      }
      {
        propList.map(p => {
          return(
              <ListTask key={p.id}
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