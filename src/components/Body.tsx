import styles from './Body.module.css'

export function Body(){
  return(
    <body className={styles.body}>
      <img
        src="/images/pasta.png"
        alt="Imagem da pasta"
      >
      </img>
      <p>
        Você ainda não tem tarefas cadastradas<br/>
        Crie tarefas e organize seus itens a fazer
      </p>
    </body>
  )
}