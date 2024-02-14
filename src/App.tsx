import { Header } from './components/Header'
import { Body } from './components/Body'
import './global.css'
import styles from './App.module.css'
import { AddTask } from './components/AddTask'

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.wrapper}>
        <AddTask></AddTask>
      </main>
      <Body></Body>
    </div>
  )
}

export default App