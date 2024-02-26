import { Trash } from "phosphor-react";
import styles from './List.module.css'

interface List {
  id: number,
  tarefa: string,
  concluida: boolean
}

export function ListTask({id, tarefa, concluida}:List){
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.criadas}>Tarefas criadas</label>  
        <label className={styles.concluidas}>Concluídas</label>  
      </div>
      <div key={id} className={styles.main}>
        <input type="radio" checked={concluida}></input>
        <label>{tarefa}</label>
        <div className={styles.trash}>
          <Trash color="#808080"></Trash>
        </div>
      </div>
    </div>
  )
}