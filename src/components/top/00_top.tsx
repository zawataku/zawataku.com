import Profile from "./profile";
import Self_Introduction from "./self_intro";
import Works from "./works";
import News from "./news";
import Skills from "./skills";
import Links from "./links";
import Footer from "./footer";

export default function Top() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-lavenderblush px-2 pb-16 pt-40 text-rubyred">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center rounded-xl border-2 border-rubyred bg-white px-6">
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