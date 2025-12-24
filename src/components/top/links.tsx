import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Links() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-8 py-4">
            <div className="flex items-center justify-center">
                <hr className="h-[2px] w-4/5 border-t-2 border-dashed border-rubyred md:w-full" />
                <h2 className="w-full text-center text-2xl font-bold md:text-3xl">Links</h2>
                <hr className="h-[2px] w-4/5 border-t-2 border-dashed border-rubyred md:w-full" />
            </div>

            <ul className="list-none space-y-6 border-l-8 border-l-[transparent] pl-0 text-base md:text-xl">
                <li className="flex items-center duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-center justify-center">
                        <FaTwitter size={24} />
                    </span>
                    <a href="https://www.twitter.com/zawataku0819" target="blank">Twitter（だいたいここにいます）</a>
                </li>
                <li className="flex items-center duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-center justify-center">
                        <FaInstagram size={24} />
                    </span>
                    <a href="https://www.instagram.com/zawataku_photo" target="blank">Instagram（フィルム多め）</a>
                </li>
                <li className="flex items-center duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-center justify-center">
                        <FaGithub size={24} />
                    </span>
                    <a href="https://www.github.com/zawataku" target="blank">GitHub（制作物はここ）</a>
                </li>
                <li className="flex items-center duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-center justify-center">
                        <img src="/img/pixiv.png" className="size-[24px]" alt="Pixivのロゴ" />
                    </span>
                    <a href="https://www.pixiv.net/users/49844579" target="blank">pixiv（あんま動かしてない）</a>
                </li>
                <li className="flex items-center duration-300 hover:opacity-60">
                    <span className="mr-2 flex size-7 items-center justify-center">
                        <img src="/img/booth.svg" className="size-[24px]" alt="BOOTHのロゴ" />
                    </span>
                    <a href="https://zawataku.booth.pm" target="blank">BOOTH（なんか売るかも）</a>
                </li>
            </ul>

        </section>
    );
}