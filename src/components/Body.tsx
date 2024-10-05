import { Image } from 'react-native'
import styles from './Body.module.css'

export function Body(){
  return(
    <div className={styles.container}>
      <Image src="/images/pasta.png" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}