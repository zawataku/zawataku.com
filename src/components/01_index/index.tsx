import Image from "next/image";
import index_styles from "../../styles/01_index/index.module.css";
import icon_image from "../../../public/image_profile_icon_01.webp";

export default function Index() {
    return (
        <div className={index_styles.inner}>
            <h1 className={index_styles.title}>ざわたく.com</h1>
            <Image src={icon_image} alt="プロフィールアイコン" className={index_styles.icon} />
        </div>
    )
}