import styles from "./transaction.module.css"
const Transaction = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Dernieres connections</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Utilisateurs</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Heure</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <img src="/1.png" 
                            alt=""
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            John Doe
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.admin} ${styles.agent}`} >Admin</span>
                    </td>
                    <td>14.02.20</td>
                    <td>19h</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <img src="/1.png" 
                            alt=""
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            John Doe
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.admin} ${styles.agent}`} >Agent</span>
                    </td>
                    <td>14.02.20</td>
                    <td>19h</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
  
  export default Transaction