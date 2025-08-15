import Profile from "./02_profile";
import Self_Introduction from "./03_self_intro";
import Works from "./05_works";
import Skills from "./04_skills";
import Links from "./06_links";
import Footer from "./10_footer";

export default function Top() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-lavenderblush px-2 py-40 text-rubyred">
            <div className="relative flex w-full mx-auto max-w-4xl flex-col items-center justify-center rounded-xl bg-white px-6 border-rubyred border-2">
                <Profile />
                <Self_Introduction />
                <Skills />
                <Works />
                <Links />
                <Footer />
            </div>
        </main>
    );
}