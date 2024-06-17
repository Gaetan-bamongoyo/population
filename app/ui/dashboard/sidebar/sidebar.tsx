import MenuLink from "./menuLink/menuLink"
import styles from "./sidebar.module.css"
import {MdDashboard, MdPeople, MdLogout, MdPersonAdd, MdDeleteForever, MdNotes, MdHomeWork} from "react-icons/md"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>
      },
    ]
  },
  {
    title: "Personne",
    list: [
      {
        title: "Liste Personne",
        path: "/dashboard/personne",
        icon: <MdPeople/>
      },
      {
        title: "Nouvelle personne",
        path: "/dashboard/personne/add",
        icon: <MdPersonAdd  />
      },
    ]
  },
  {
    title: "Attestations",
    list: [
      {
        title: "Naissance",
        path: "/dashboard/personne/naissance",
        icon: <MdNotes/>
      },
      {
        title: "Mariage",
        path: "/dashboard/personne/mariage",
        icon: <MdPeople/>
      },
      {
        title: "Deces",
        path: "/dashboard/personne/deces",
        icon: <MdDeleteForever/>
      },
    ]
  },
  {
    title: "Utilisateur",
    list: [
      {
        title: "Bureau",
        path: "/dashboard/parametre",
        icon: <MdHomeWork/>
      },
      {
        title: "Parametres",
        path: "/dashboard/setting",
        icon: <MdDashboard/>
      },
      {
        title: "Aide",
        path: "/dashboard/help",
        icon: <MdDashboard/>
      },
    ]
  }
]

const Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <div className="img"></div>
          <div className={styles.userDetail}>
            <span className={styles.username}>John Week</span>
            <span className={styles.userTitle}>dministrateur</span>
          </div>
        </div>
        <ul className={styles.list}>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title}/>
              ))}
            </li>
          ))}
        </ul>
        <button className={styles.logout}>
          < MdLogout size={20}/>
          Deconnexion
        </button>
      </div>
    )
  }
  
  export default Sidebar