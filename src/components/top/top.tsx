import Profile from "./profile";

export default function Top() {
    return (
        <section className="flex min-h-screen flex-col items-center bg-primary-300 p-8 text-primary-800">
            <div className="relative flex min-h-screen w-full justify-center rounded-xl bg-[#fff] p-8 shadow-lg">
                <Profile />
            </div>
        </section>
    );
}