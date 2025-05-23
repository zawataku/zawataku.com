import access_counter_styles from "../../styles/00_common/access_counter.module.css";
import Image from "next/image";
import under_construction_image from "../../../public/buru-ani02.gif"

export default function AccessCounter() {
    return (
        <div className={access_counter_styles.counter_inner}>
            <h2 className={access_counter_styles.counter_title}>-- アクセスカウンター --</h2>
            <div className={access_counter_styles.counter_image_box}>
                <Image src={under_construction_image} alt="工事中の画像" className={access_counter_styles.under_construction_image}></Image>
            </div>
        </div>
    );
}