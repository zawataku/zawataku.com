import Works_Card from "../components/top/05a_worksProps";
import { useEffect, useState } from "react";

type Work = {
    id: number;
    link: string;
    imgpath: string;
    title: string;
    description: string;
};

export default function WorksPage() {
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_WORKERS_URL}/works`)
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data
                    .sort((a: Work, b: Work) => b.id - a.id) // 降順ソート
                setWorks(sortedData);
            });
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center bg-primary-300 px-2 py-8 text-primary-800 md:p-8">
            <div className="relative flex w-full flex-col items-center justify-center rounded-xl bg-[#fff] p-6 shadow-lg">
                <section className="flex w-full max-w-2xl flex-col gap-4 py-10">
                    <h1 className="text-center text-3xl font-bold md:text-4xl">-- Works --</h1>
                    <h1 className="text-center text-base md:text-xl">片手間で作ったものたち</h1>
                    <section className="flex flex-col gap-6 py-10">
                        {works.map((work) => (
                            <Works_Card
                                key={work.id}
                                link={work.link}
                                imgpath={work.imgpath}
                                title={work.title}
                                description={work.description}
                            />
                        ))}
                    </section>
                    <a href="/" className="text-center text-base underline duration-300 hover:opacity-60">トップページに戻る</a>

                </section>
            </div>
        </main>
    );
}