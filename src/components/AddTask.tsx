import { PlusCircle } from 'phosphor-react';
import styles from './AddTask.module.css'
import { FormEvent, useState } from 'react';

interface AddTaskProps{
  task : string;
  onAddTask: (task: string) => void;
}

export function AddTask({onAddTask}:AddTaskProps)
{
  const [newTask, setNewTask] = useState([''])

  function handleAddTask(event: FormEvent)
  {
    event?.preventDefault();

    setNewTask([...newTask]);

    setNewTask(['']);
  }

  return(
    <form onSubmit={handleAddTask} className={styles.container}>
      <input name="task" placeholder="Adicione uma nova tarefa"></input>
      <button>Criar<PlusCircle></PlusCircle></button>
    </form>
  );
}