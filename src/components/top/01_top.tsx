import Profile from "./02_profile";
import Self_Introduction from "./03_self_intro";
import Works from "./05_works";
import Skills from "./04_skills";
import Footer from "./10_footer";

export default function Top() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-primary-300 px-2 py-8 text-primary-800 md:p-8">
            <div className="relative flex w-full flex-col items-center justify-center rounded-xl bg-[#fff] p-6 shadow-lg">
                <Profile />
                <Self_Introduction />
                <Skills />
                <Works />
                <Footer />
            </div>
        </main>
    );
}