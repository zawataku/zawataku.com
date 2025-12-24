import styles from "./skills.module.css";

export default function Skills() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <hr className={styles.separator} />
                <h2 className={styles.title}>Skills</h2>
                <hr className={styles.separator} />
            </div>
            <div className={styles.skillsList}>
                <section className={styles.skillSection}>
                    <h2 className={styles.skillTitle}>ちょっとわかる</h2>
                    <p className={styles.skillDescription}>Next.js / React / Tailwind / 自宅鯖</p>
                </section>

                <section className={styles.skillSection}>
                    <h2 className={styles.skillTitle}>きょうみ</h2>
                    <p className={styles.skillDescription}>ITインフラまわり / Ruby on Rails</p>
                </section>
            </div>
        </section>
    )
}