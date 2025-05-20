import Image from "next/image";
import index_styles from "../../styles/01_index/index.module.css";
import icon_image from "../../../public/image_profile_icon_01.webp";

import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


export default function Index() {
    return (
        <div className={index_styles.container}>
            <section className={index_styles.top_section}>
                <h1 className={index_styles.title}>ざわたく.com</h1>
                <Image src={icon_image} alt="プロフィールアイコン" className={index_styles.profile} />
                <div className={index_styles.icon_list}>
                    <a href="https://twitter.com/zawataku0819" target="_blank" aria-label="Twitter" className={index_styles.social_icon}>
                        <FaSquareTwitter size={50} />
                    </a>
                    <a href="https://instagram.com/zawataku_photo" target="_blank" aria-label="Twitter" className={index_styles.social_icon}>
                        <FaSquareInstagram size={50} />
                    </a>
                    <a href="https://github.com/zawataku" target="_blank" aria-label="Twitter" className={index_styles.social_icon}>
                        <FaSquareGithub size={50} />
                    </a>
                </div>
            </section>

            <section className={index_styles.section}>
                <h2 className={index_styles.sub_title}>-- 自己紹介 --</h2>

            </section>
        </div>
    )
}