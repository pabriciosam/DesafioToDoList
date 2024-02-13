import styles from './Body.module.css'

export function Body(){
  return(
    <div className={styles.container}>
      <img src="/images/pasta.png" alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}