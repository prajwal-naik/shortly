import styles from "./Statistics.module.css"

function Statistics() {
    return (
        <div className = {styles.statistics}>
            <div className={styles.demoTitle}>
                <p className = {styles.demoTitleHead}>Advanced Statistics</p>
                <p className = {styles.demoTitleDesc}>Track how your links are performing across the web with<br/>our advances statistics dashboard</p>
            </div>
            <div className={styles.statisticsDivContainer}>
                <div className={styles.blueLine}>
                    <div className={styles.blueLineInner}>

                    </div>
                </div>
                <div className={styles.statisticsSection}>
                    <div className={styles.statisticsSectionIcon}>
                        <img src = "/images/icon-brand-recognition.svg" />
                    </div>
                    <div className={styles.statisticsSectionTitle}>
                        <p>Brand Recognition</p>
                    </div>
                    <div className={styles.statisticsSectionDescription}>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </div>
                </div>
                <div className={[styles.statisticsSection, styles.firstChild].join(" ")}>
                    <div className={styles.statisticsSectionIcon}>
                        <img src = "/images/icon-detailed-records.svg" />
                    </div>
                    <div className={styles.statisticsSectionTitle}>
                        Detailed Records
                    </div>
                    <div className={styles.statisticsSectionDescription}>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.                    </div>
                </div>
                <div className={[styles.statisticsSection, styles.secondChild].join(" ")}>
                    <div className={styles.statisticsSectionIcon}>
                        <img src = "/images/icon-fully-customizable.svg" />
                    </div>
                    <div className={styles.statisticsSectionTitle}>
                        Fully Customizable
                    </div>
                    <div className={styles.statisticsSectionDescription}>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Statistics
