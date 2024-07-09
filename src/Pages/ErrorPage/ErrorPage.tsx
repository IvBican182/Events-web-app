import Navbar from "../../components/pageNavbar/Navbar";
import styles from "./ErrorPage.module.css"

const ErrorPage = () => {
    return (
        <>
        <Navbar />
        <main className={styles.main}>
            <h1 className={styles.title}>An error occurred !</h1>
            <p className={styles.error}>Could not find this page</p>
        </main>
        </>
    )
}

export default ErrorPage;