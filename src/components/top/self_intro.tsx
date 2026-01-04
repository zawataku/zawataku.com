import styles from '../../styles/self_intro.module.css';
import commonStyles from '../../styles/common.module.css';

export default function Self_Introduction() {
    return (
        <section className={commonStyles.section}>
            <div className={commonStyles.container}>
                <div className={commonStyles.header}>
                    <h2 className={commonStyles.title}>プロフィール</h2>
                </div>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>自己紹介</h2>
                        <p className={styles.text}>ざわたくです。石川県の大学生です。</p>
                        <p className={styles.text}>さけるチーズとサラダチキンが好きです。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>好きなもの</h2>
                        <p className={styles.text}>さけるチーズ / サラダチキン / ルイボスティー</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>好きなこと</h2>
                        <p className={styles.text}>お絵描き / フィルム写真撮影</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>好きな言語・技術</h2>
                        <p className={styles.text}>React / Electron</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>好きなカメラ</h2>
                        <p className={styles.text}>オリンパスペンF / オリンパスペンS</p>
                    </section>
                </div>
            </div>
        </section>
    );
}