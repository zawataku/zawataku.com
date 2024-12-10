type worksProps = {
    link: string;
    img: string;
    title: string;
    description: string;
}

export default function Works_Card({ link, img, title, description }: worksProps) {
    return (
        <a href={link} target="blank">
            <div className="flex rounded-xl p-1 duration-200 hover:opacity-60 md:p-3">
                <img src={img} className="size-24 rounded-xl shadow-lg" alt={title} />
                <div className="ml-4 flex flex-col gap-3">
                    <h3 className="line-clamp-1 text-xl font-bold md:text-2xl">{title}</h3>
                    <p className="line-clamp-2 text-sm text-primary-800 text-opacity-70 md:text-base">{description}</p>
                </div>
            </div>
        </a>
    );
}