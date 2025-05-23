import Index from "@/components/01_index";
import SideMenu from "@/components/00_common/side_menu";
import AccessCounter from "@/components/00_common/access_counter";

import common_styles from "../styles/00_common/common.module.css"
import side_menu_styles from "../styles/00_common/side_menu.module.css"
import access_counter_styles from "../styles/00_common/access_counter.module.css"
import content_styles from "../styles/00_common/content.module.css"

export default function Home() {
  return (
    <main className={common_styles.main}>
      <div className={common_styles.side}>
        <div className={side_menu_styles.side_menu}>
          <SideMenu />
        </div>
        <div className={access_counter_styles.counter}>
          <AccessCounter />
        </div>
      </div>

      <div className={content_styles.content}>
        <Index />
      </div>
    </main>
  );
}
