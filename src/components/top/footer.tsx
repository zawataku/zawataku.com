import styles from "../../styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr className={styles.separator} />
            <p className={styles.copyright}>© 2024 - 2025 ざわたく.com</p>
        </footer>
    )
}