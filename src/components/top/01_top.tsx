import Profile from "./02_profile";
import Self_Introduction from "./03_self_intro";
import Works from "./04_works";
import Skills from "./05_skills";

export default function Top() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-primary-300 p-8 text-primary-800">
            <div className="relative flex w-full flex-col items-center justify-center rounded-xl bg-[#fff] p-6 shadow-lg">
                <Profile />
                <Self_Introduction />
                <Works />
                <Skills />
            </div>
        </main>
    );
}