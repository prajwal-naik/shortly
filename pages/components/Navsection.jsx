import styles from "./Navsection.module.css"

function Navsection() {
    return (
        <div className = {styles.navSection}>
            <div className = {styles.navSectionContainer}>
                <div className={styles.headerOptions}>
                    <p>Features</p>
                </div>
                <div className={styles.headerOptions}>
                    <p>Pricing</p>
                </div>
                <div className={styles.headerOptions}>
                    <p>Resources</p>
                </div>
                
                <div className={styles.headerOptions}>
                    <p>Login</p>
                </div>
                <div className={styles.viewCode}>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default Navsection
