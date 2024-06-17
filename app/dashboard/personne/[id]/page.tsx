import styles from "@/app/ui/dashboard/view/singlePagePersonne.module.css"

const SinglePagePersonne = () => {
    return (
      <div className={styles.container}>
        <div className={styles.infocontainer}>
          <div className={styles.image}>
            <img src="/1.png" alt="" width={200} height={200} />
          </div>
        </div>
        <div className={styles.formcontainer}>
          <form action="" method="post" className={styles.form}>
            <label htmlFor="">Noms</label>
            <input type="text" name="" id="" placeholder="Nom" />
            <button type="submit">Modifier</button>

          </form>
        </div>
      </div>
    )
  }
  
  export default SinglePagePersonne