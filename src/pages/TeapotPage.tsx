import styles from "../styles/teapot.module.css";
import commonStyles from "../styles/common.module.css";
import Footer from "../components/top/footer";

export default function Teapot() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={commonStyles.section}>
                    <div className={styles.content}>
                        <img src="/img/teapot.webp" alt="teapot" className={styles.image} />
                        <h1 className={styles.title}>418 I'm a teapot</h1>
                        <p className={styles.description}>The requested entity body is short and stout.</p>
                        <a href="/" className={styles.link}>トップページに戻る</a>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
}