import { FaSquareXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

export default function Profile() {
    return (
        <section className="flex w-full max-w-3xl flex-col items-center gap-8 pb-10 pt-16">
            <h1 className="text-center text-4xl font-bold md:text-5xl">ざわたく.com</h1>
            <img
                src="/img/photo_001.webp"
                alt="プロフィールアイコン"
                className="size-28 rounded-full border-4 border-solid border-primary-800"
            />

            <div className="flex gap-8">
                <a href="https://twitter.com/zawataku0819" target="_blank" aria-label="Twitter" className="text-primary-900 duration-300 hover:opacity-60">
                    <FaSquareXTwitter size={40} />
                </a>
                <a href="https://www.instagram.com/zawataku0819" target="_blank" aria-label="Instagram" className="text-primary-900 duration-300 hover:opacity-60">
                    <FaSquareInstagram size={40} />
                </a>
                <a href="https://www.github.com/zawataku" target="_blank" aria-label="GitHub" className="text-primary-900 duration-300 hover:opacity-60">
                    <FaSquareGithub size={40} />
                </a>
            </div>

        </section>
    )
}