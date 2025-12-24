import { FaSquareTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import styles from "./profile.module.css";

export default function Profile() {
    return (
        <section className={styles.section}>
            <div className={styles.iconContainer}>
                <img
                    src="/img/icon.avif"
                    alt="プロフィールアイコン"
                    className={styles.icon}
                />
            </div>
            <h1 className={styles.name}>ざわたく</h1>

            <div className={styles.socialLinks}>
                <a href="https://twitter.com/zawataku0819" target="_blank" aria-label="Twitter" className={styles.link}>
                    <FaSquareTwitter size={40} />
                </a>
                <a href="https://www.instagram.com/zawataku_photo" target="_blank" aria-label="Instagram" className={styles.link}>
                    <FaSquareInstagram size={40} />
                </a>
                <a href="https://www.github.com/zawataku" target="_blank" aria-label="GitHub" className={styles.link}>
                    <FaSquareGithub size={40} />
                </a>
            </div>

        </section>
    )
}