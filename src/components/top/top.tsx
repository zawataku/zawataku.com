import Profile from "./profile";
import Self_Introduction from "./self_intro";
import Works from "./works";
import Skills from "./skills";

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