type worksProps = {
    link: string;
    imgpath: string;
    title: string;
    description: string;
}

export default function Works_Card({ link, imgpath, title, description }: worksProps) {
    return (
        <a href={link} target="blank">
            <div className="flex rounded-xl p-1 duration-300 hover:opacity-60 md:p-3">
                <img src={imgpath} className="size-24 rounded-xl shadow-lg" alt={title} />
                <div className="ml-4 flex flex-col gap-3">
                    <h3 className="line-clamp-1 text-xl font-bold md:text-2xl">{title}</h3>
                    <p className="line-clamp-2 text-sm text-primary-800 md:text-base">{description}</p>
                </div>
            </div>
        </a>
    );
}