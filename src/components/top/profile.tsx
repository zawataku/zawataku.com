import { FaSquareTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import styles from "../../styles/profile.module.css";
import commonStyles from '../../styles/common.module.css';
import { useEffect, useState } from "react";


export default function Profile() {
    const [isRotating, setIsRotating] = useState(false);
    const [, setInput] = useState<string[]>([]);
    const rotateCode = [
        "ArrowUp", "ArrowUp",
        "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight",
        "ArrowLeft", "ArrowRight",
        "b", "a"
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setInput(prev => {
                const newInput = [...prev, e.key.toLowerCase()];
                if (newInput.length > rotateCode.length) {
                    newInput.shift();
                }

                if (newInput.join(",") === rotateCode.map(k => k.toLowerCase()).join(",")) {
                    setIsRotating(true);
                    setTimeout(() => setIsRotating(false), 1000);
                    return [];
                }
                return newInput;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className={commonStyles.section}>
            <div className={styles.iconContainer}>
                <img
                    src="/img/icon.avif"
                    alt="プロフィールアイコン"
                    className={`${styles.icon} ${isRotating ? styles.rotate : ""}`}
                />
            </div>
            <h1 className={styles.name}>ざわたく</h1>

            <div className={styles.socialLinks}>
                <a href="https://twitter.com/zawataku0819" target="_blank" aria-label="Twitter" className={styles.link}>
                    <FaSquareTwitter size={40} />
                </a>
                <a href="https://www.instagram.com/zawataku_film" target="_blank" aria-label="Instagram" className={styles.link}>
                    <FaSquareInstagram size={40} />
                </a>
                <a href="https://www.github.com/zawataku" target="_blank" aria-label="GitHub" className={styles.link}>
                    <FaSquareGithub size={40} />
                </a>
            </div>
        </section>
    )
}