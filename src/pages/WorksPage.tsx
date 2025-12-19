import { useState, useEffect } from 'react';
import { client } from '../libs/client';
import type { Work } from '../types/microcms';
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'

export default function WorksPage() {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getWorks = async () => {
            try {
                const data = await client.get({
                    endpoint: 'works',
                });
                setWorks(data.contents);
            } catch (error) {
                console.error('データの取得に失敗しました:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getWorks();
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center bg-lavenderblush px-2 py-4 text-rubyred">
            <div className="relative mx-auto flex min-h-[95vh] w-full max-w-4xl flex-col items-center rounded-xl bg-white px-6">
                <section className="flex w-full max-w-2xl flex-col gap-4 py-14">
                    <h1 className="text-center text-3xl font-bold md:text-4xl">-- Works --</h1>
                    <h1 className="text-center text-base md:text-xl">自慢の制作物たち</h1>
                    <section className="flex flex-col gap-6 py-10">
                        {isLoading ? (
                            <div className="flex justify-center py-10">
                                <LineSpinner
                                    size="60"
                                    stroke="4"
                                    speed="1"
                                    color="#991B1B"
                                />
                            </div>
                        ) : (
                            works.map((work) => (
                                <a key={work.id} href={work.link} target="_blank">
                                    <a key={work.id} href={work.link} target="_blank" >
                                        <div className="flex rounded-xl p-1 duration-300 hover:opacity-60 md:p-3">
                                            {work.images && (
                                                <img
                                                    src={work.images.url}
                                                    alt={work.title}
                                                    className='size-24 rounded-xl shadow-md'
                                                />
                                            )}
                                            <div className="ml-4 flex flex-col gap-3">
                                                <h3 className="line-clamp-1 text-xl font-bold md:text-2xl">{work.title}</h3>
                                                <p className="line-clamp-2 text-sm text-rubyred md:text-base">{work.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </a>
                            ))
                        )}
                    </section>
                    <a href="/" className="text-center text-base underline duration-300 hover:opacity-60">トップページに戻る</a>
                </section>
            </div>
        </main>
    );
}