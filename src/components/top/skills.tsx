import styles from "../../styles/skills.module.css";
import commonStyles from '../../styles/common.module.css';

export default function Skills() {
    return (
        <section className={commonStyles.container}>
            <div className={commonStyles.header}>
                <hr className={commonStyles.separator} />
                <h2 className={commonStyles.title}>Skills</h2>
                <hr className={commonStyles.separator} />
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