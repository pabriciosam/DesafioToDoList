import { PlusCircle } from 'phosphor-react';
import styles from './AddTask.module.css'

export function AddTask()
{
  return(
    <div className={styles.container}>
      <input placeholder="Adicione uma nova tarefa"></input>
      <button>Criar<PlusCircle></PlusCircle></button>
    </div>
  );
}