import styles from "../../styles/notfound.module.css";

export default function NotFound() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <img src="/img/404.webp" alt="404 Not Found" className={styles.image} />
                    <p className={styles.credit}>Illustration by 2個 (@chohjaharaSA)</p>
                    <h1 className={styles.title}>404 Not Found</h1>
                    <p className={styles.description}>お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．</p>
                    <a href="/" className={styles.link}>トップページに戻る</a>
                </div>
            </div>
        </main>
    );
}