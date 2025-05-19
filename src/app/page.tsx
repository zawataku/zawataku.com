import Image from "next/image";

import common_styles from "../styles/00_common/common.module.css"
import sidebar_styles from "../styles/00_common/sidebar.module.css"
import content_styles from "../styles/00_common/content.module.css"
import index_styles from "../styles/01_index/index.module.css"
import icon_image from "../../public/image_profile_icon_01.webp";

export default function Home() {
  return (
    <main className={common_styles.main}>
      <div className={sidebar_styles.sidebar}>
        <h2>Sidebar</h2>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>

      <div className={content_styles.content}>
        <div className={index_styles.inner}>
          <h1 className={index_styles.title}>ざわたく.com</h1>
          <Image src={icon_image} alt="プロフィールアイコン" className={index_styles.icon} />
        </div>
      </div>
    </main>
  );
}
