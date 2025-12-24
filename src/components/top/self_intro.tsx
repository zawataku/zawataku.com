import styles from './self_intro.module.css';

export default function Self_Introduction() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <hr className={styles.separator} />
                <h2 className={styles.title}>About Me</h2>
                <hr className={styles.separator} />
            </div>
            <div className={styles.content}>
                {/* 自己紹介 */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>自己紹介</h2>
                    <p className={styles.text}>ざわたくです。石川県の大学生です。</p>
                    <p className={styles.text}>さけるチーズとサラダチキンが好きです。</p>
                </section>

                {/* 好きなもの */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>好きなもの</h2>
                    <p className={styles.text}>さけるチーズ / サラダチキン</p>
                </section>

                {/* 趣味 */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>趣味</h2>
                    <p className={styles.text}>お絵描き / フィルムカメラ</p>
                </section>
            </div>
        </section>
    );
}