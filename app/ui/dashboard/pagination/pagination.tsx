import styles from "./pagination.module.css"

const Pagination = () => {
    return (
      <div className={styles.container}>
        <button className={styles.next} disabled>Suivant</button>
        <button className={styles.next}>Precedent</button>
      </div>
    )
  }
  
  export default Pagination