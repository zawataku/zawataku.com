import { Link } from "react-router-dom";
import styles from "../styles/notfound.module.css";
import commonStyles from "../styles/common.module.css";
import Footer from "../components/top/footer";

export default function NotFound() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={commonStyles.section}>
                    <div className={styles.content}>
                        <img src="/img/404.webp" alt="404 Not Found" className={styles.image} />
                        <p className={styles.credit}>Illustration by 2個 (@chohjaharaSA)</p>
                        <h1 className={styles.title}>404 Not Found</h1>
                        <p className={styles.description}>お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。</p>
                        <Link to="/" className={styles.link}>トップページに戻る</Link>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
}