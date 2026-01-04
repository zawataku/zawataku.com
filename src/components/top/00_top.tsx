import Profile from "./profile";
import Self_Introduction from "./self_intro";
import Works from "./works";
import News from "./news";
import Skills from "./skills";
import Links from "./links";
import Footer from "./footer";
import styles from "../../styles/00_top.module.css";

export default function Top() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Profile />
                <Self_Introduction />
                <News />
                <Skills />
                <Works />
                <Links />
                <Footer />
            </div>
        </main>
    );
}