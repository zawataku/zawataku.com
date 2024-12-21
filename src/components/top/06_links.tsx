import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

export default function Links() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-12 border-t py-10">
            <h1 className="text-center text-3xl font-bold md:text-4xl">-- Links --</h1>

            <ul className="list-none space-y-6 border-l-8 border-l-[transparent] pl-0 text-base md:text-xl">
                <li className="flex items-end duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-end justify-center">
                        <FaTwitter size={24} />
                    </span>
                    <a href="https://www.twitter.com/zawataku0819" className="underline" target="blank">Twitter</a>
                </li>
                <li className="flex items-end duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-end justify-center">
                        <FaInstagram size={24} />
                    </span>
                    <a href="https://www.instagram.com/zawataku0819" className="underline" target="blank">Instagram</a>
                </li>
                <li className="flex items-end duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-end justify-center">
                        <FaGithub size={24} />
                    </span>
                    <a href="https://www.github.com/zawataku" className="underline" target="blank">GitHub</a>
                </li>
                <li className="flex items-end duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-end justify-center">
                        <SiQiita size={24} />
                    </span>
                    <a href="https://qiita.com/zawataku0819" className="underline" target="blank">Qiita</a>
                </li>
            </ul>

        </section>
    );
}