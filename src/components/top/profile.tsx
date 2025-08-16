import { FaSquareTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

export default function Profile() {
    return (
        <section className="flex w-full max-w-2xl flex-col items-center gap-8 py-6">
            <div className="block">
                <img
                    src="/img/icon.webp"
                    alt="プロフィールアイコン"
                    className="size-36 rounded-full border-2 border-solid border-rubyred -mt-[50%]"
                />
            </div>
            <h1 className="text-center text-2xl font-bold md:text-4xl">ざわたく</h1>

            <div className="flex gap-8">
                <a href="https://twitter.com/zawataku0819" target="_blank" aria-label="Twitter" className="text-rubyred duration-300 hover:opacity-60">
                    <FaSquareTwitter size={40} />
                </a>
                <a href="https://www.instagram.com/zawataku_photo" target="_blank" aria-label="Instagram" className="text-rubyred duration-300 hover:opacity-60">
                    <FaSquareInstagram size={40} />
                </a>
                <a href="https://www.github.com/zawataku" target="_blank" aria-label="GitHub" className="text-rubyred duration-300 hover:opacity-60">
                    <FaSquareGithub size={40} />
                </a>
            </div>

        </section>
    )
}