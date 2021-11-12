import styles from "./Intro.module.css"
import Image from "next/image"

function Intro() {
    return (
        <div className={styles.intro}>
            <div className = {styles.mobileImage}>
                <img src = "/images/illustration-working.svg" />
            </div>
            <div className={styles.introContainer}>
                <div className={styles.infoDiv}>
                    <div className={styles.screamer}>
                        <p>More than just<br/>shorter links</p>
                    </div>
                    <p className={styles.description}>Build your brand&apos;s recognition and get detailed<br/>insights on how your links are performing.</p>
                    <div className={styles.viewCode}>
                        Get started
                    </div>
                </div>
                {/* <div className = {styles.imageDiv}>
                    <img src ="/images/illustration-working.svg" alt = "jumboImg" />
                </div> */}
            </div>
        </div>
    )
}

export default Intro
