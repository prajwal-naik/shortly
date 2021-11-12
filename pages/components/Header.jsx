import styles from "./Header.module.css"


function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <p className = {styles.logo}>Shortly</p>
                    <div className={styles.headerOptions}>
                        <p>Features</p>
                    </div>
                    <div className={styles.headerOptions}>
                        <p>Pricing</p>
                    </div>
                    <div className={styles.headerOptions}>
                        <p>Resources</p>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerOptions}>
                        <p>Login</p>
                    </div>
                    <div className={styles.viewCode}>
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
