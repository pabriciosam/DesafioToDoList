import { Header } from './components/Header'
 import { Body } from './components/Body'
import './global.css'
import styles from './App.module.css'
import { AddTask } from './components/AddTask'
import { ListTask } from './components/List'

const propList = {
  id: 1,
  tarefa: "Minha tarefa",
  concluida: false
}

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.wrapper}>
        <AddTask></AddTask>
      </main>
      {/* <Body></Body> */}
      <ListTask 
        id={propList.id}
        tarefa={propList.tarefa}
        concluida={propList.concluida}
      >
      </ListTask>
    </div>
  )
}

export default App