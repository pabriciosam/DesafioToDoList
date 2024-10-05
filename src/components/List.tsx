import { Trash } from "phosphor-react";
import styles from './List.module.css'

interface List {
  id: number,
  tarefa: string,
  concluida: boolean
}

export function ListTask({id, tarefa, concluida}:List){
  function handleCheckTask(){

  }

  return(
    <div key={id} className={styles.container}>
      <div className={styles.task}>
        <input type="radio" checked={concluida} onChange={handleCheckTask}></input>
        <label>{tarefa}</label>
      </div>
      <div className={styles.trash}>
        <Trash color="#808080"></Trash>
      </div>
    </div>
  )
}