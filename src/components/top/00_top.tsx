import Profile from "./profile";
import Self_Introduction from "./self_intro";
import Works from "./works";
import Skills from "./skills";
import Links from "./links";
import Footer from "./footer";

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