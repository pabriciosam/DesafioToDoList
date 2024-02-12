import styles from './Header.module.css'

export function Header(){
  return(
    <body className={styles.body}>
      <div className={styles.logo}>
        <img className={styles.foguete} 
          src="/images/rocket.png"
          alt="Imagem do foguete">
        </img>
        <img className={styles.todo} 
          src="/images/todo.png"
          alt="Imagem todo">
        </img>
      </div>
    </body>
  );
}