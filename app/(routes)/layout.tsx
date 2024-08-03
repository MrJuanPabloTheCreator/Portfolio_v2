
import SideBar from "./_components/_SideBar/sideBar";
import styles from "./layout.module.css"

const RoutesLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {

  return (
    <main className={styles.main}>
        <SideBar/>
        <div className={styles.pageContainer}>
            {children}
        </div>
    </main>
  )
}

export default RoutesLayout