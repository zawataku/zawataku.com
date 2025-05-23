import Image from "next/image";
import Link from "next/link";
import index_styles from "../../styles/01_index/index.module.css";
import icon_image from "../../../public/image_profile_icon_01.webp";

import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

import News from "./news";

export default function Index() {
    return (
        <div className={index_styles.container}>
            <section className={index_styles.top_section}>
                <h1 className={index_styles.heading_1}>ざわたく.com</h1>
                <Image src={icon_image} alt="プロフィールアイコン" className={index_styles.profile_icon} />
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

            <section className={index_styles.about_me_section}>
                <h2 className={index_styles.heading_2}>-- About Me --</h2>
                <div className={index_styles.about_me_content}>
                    <h3 className={index_styles.heading_3}>自己紹介</h3>
                    <p className={index_styles.about_me_text}>ざわたくです。石川県の大学生です。</p>
                    <p className={index_styles.about_me_text}>さけるチーズとサラダチキンが好きです。</p>
                </div>
                {/* <div className={index_styles.about_me_content}>
                    <h3 className={index_styles.heading_3}>すきなもの</h3>
                    <p className={index_styles.about_me_text}>さけるチーズ / サラダチキン</p>
                </div>
                <div className={index_styles.about_me_content}>
                    <h3 className={index_styles.heading_3}>趣味</h3>
                    <p className={index_styles.about_me_text}>お絵描き / フィルムカメラ</p>
                </div> */}
            </section>


            <section className={index_styles.news_section}>
                <h2 className={index_styles.heading_2}>-- 更新情報 --</h2>
                <News />
                <Link href="/news" className={index_styles.news_link}>
                    すべての更新履歴を見る
                </Link>
            </section>
        </div>
    )
}