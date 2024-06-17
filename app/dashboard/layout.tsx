import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"
import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode
  // any props that come into the component
}
const Layout = ({children, ...props}: Props) => {
    return (
      <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
      </div>
    )
  }
  
  export default Layout