import Link from "next/link";
import side_menu_styles from "../../styles/00_common/side_menu.module.css";
import { FaHome } from "react-icons/fa";

export default function SideMenu() {
    return (
        <div className={side_menu_styles.side_menu_inner}>
            <h2 className={side_menu_styles.side_menu_title}>-- お品書き --</h2>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}