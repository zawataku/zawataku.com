import Profile from "../components/top/profile";
import Self_Introduction from "../components/top/self_intro";
import Works from "../components/top/works";
import News from "../components/top/news";
// import Skills from "./skills";
import Links from "../components/top/links";
import Footer from "../components/top/footer";
import styles from "../styles/00_top.module.css";

export default function TopPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Profile />
                <Self_Introduction />
                <News />
                {/* <Skills /> */}
                <Works />
                <Links />
                <Footer />
            </div>
        </main>
    );
}