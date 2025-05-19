import Works_Card from "./05a_worksProps";
import { useEffect, useState } from "react";

type Work = {
    id: number;
    link: string;
    imgpath: string;
    title: string;
    description: string;
};

export default function Works() {
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_WORKERS_URL}/works`)
            .then((response) => response.json())
            .then((data) => {
                // IDの大きい順にソートし、最新2件を取得
                const sortedData = data
                    .sort((a: Work, b: Work) => b.id - a.id) // 降順ソート
                    .slice(0, 2); // 最新2件を取得
                setWorks(sortedData);
            });
    }, []);

    return (
        <section className="flex w-full max-w-2xl flex-col gap-6 border-t py-10">
            <h1 className="text-center text-3xl font-bold md:text-4xl">-- Works --</h1>
            {works.map((work) => (
                <Works_Card
                    key={work.id}
                    link={work.link}
                    imgpath={work.imgpath}
                    title={work.title}
                    description={work.description}
                />
            ))}

            <a href="/works" className="text-center text-base underline duration-300 hover:opacity-60">その他はこちら</a>
        </section>
    );
}