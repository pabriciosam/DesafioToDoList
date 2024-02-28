import { Trash } from "phosphor-react";
import styles from './List.module.css'

interface List {
  id: number,
  tarefa: string,
  concluida: boolean
}

export function ListTask({id, tarefa, concluida}:List){
  return(
    <div key={id} className={styles.container}>
      <div className={styles.input}>
        <input type="radio" checked={concluida}></input>
        <label>{tarefa}</label>
      </div>
      <div className={styles.trash}>
        <Trash color="#808080"></Trash>
      </div>
    </div>
  )
}