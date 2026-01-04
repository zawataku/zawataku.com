import styles from "../../styles/footer.module.css";
import commonStyles from '../../styles/common.module.css';

export default function Footer() {
    return (
        <footer className={commonStyles.section}>
            <p className={styles.copyright}>(c) 2023 - 2026 ざわたく all rights reserved.</p>
        </footer>
    )
}