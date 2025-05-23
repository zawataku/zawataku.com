import Link from "next/link";
import side_menu_styles from "../../styles/00_common/side_menu.module.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

export default function SideMenu() {
    return (
        <div className={side_menu_styles.side_menu_inner}>
            <h2 className={side_menu_styles.side_menu_title}>-- お品書き --</h2>
            <ul className={side_menu_styles.side_menu_ul}>
                <li className={side_menu_styles.side_menu_li}>
                    <Link href="/"><FaHome />Home</Link>
                </li>
                <li className={side_menu_styles.side_menu_li}>
                    <Link href="/about"><FaUser />About</Link>
                </li>
                <li className={side_menu_styles.side_menu_li}>
                    <Link href="/works"><FaCode />Works</Link>
                </li>
            </ul>
        </div>
    );
}