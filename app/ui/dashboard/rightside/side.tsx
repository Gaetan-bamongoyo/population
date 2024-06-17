import { MdNotificationImportant, MdPlayCircleFilled } from "react-icons/md"
import styles from "./side.module.css"
const RightBar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>
          <MdNotificationImportant size={20}/>
            Notifications</span>
          <h3 className={styles.title}>Comment utiliser la nouvelle version</h3>
          <span className={styles.subtitle}>Prenez seulement 4 minutes pour apprendre</span>
          <p className={styles.desc}>
            Vous avez une nouvelle option. Cela Vous
            permet de mettre les elements sous windows
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Lire
          </button>
        </div>
        </div>
      </div>
    )
  }
  
  export default RightBar