import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import styles from "../../styles/links.module.css";

export default function Links() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <hr className={styles.separator} />
                <h2 className={styles.title}>Links</h2>
                <hr className={styles.separator} />
            </div>

            <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                    <span className={styles.iconWrapper}>
                        <FaTwitter size={24} />
                    </span>
                    <a href="https://www.twitter.com/zawataku0819" target="blank">Twitter（だいたいここにいます）</a>
                </li>
                <li className={styles.linkItem}>
                    <span className={styles.iconWrapper}>
                        <FaInstagram size={24} />
                    </span>
                    <a href="https://www.instagram.com/zawataku_photo" target="blank">Instagram（フィルム多め）</a>
                </li>
                <li className={styles.linkItem}>
                    <span className={styles.iconWrapper}>
                        <FaGithub size={24} />
                    </span>
                    <a href="https://www.github.com/zawataku" target="blank">GitHub（制作物はここ）</a>
                </li>
                <li className={styles.linkItem}>
                    <span className={styles.iconWrapper}>
                        <img src="/img/pixiv.png" className={styles.iconImage} alt="Pixivのロゴ" />
                    </span>
                    <a href="https://www.pixiv.net/users/49844579" target="blank">pixiv（あんま動かしてない）</a>
                </li>
                <li className={styles.linkItem}>
                    <span className={styles.iconWrapper}>
                        <img src="/img/booth.svg" className={styles.iconImage} alt="BOOTHのロゴ" />
                    </span>
                    <a href="https://zawataku.booth.pm" target="blank">BOOTH（なんか売るかも）</a>
                </li>
            </ul>

        </section>
    );
}
