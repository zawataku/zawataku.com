import { useState, useEffect } from 'react';
import { client } from '../../libs/client';
import type { Work } from '../../types/microcms';

function App() {
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        const getWorks = async () => {
            try {
                const data = await client.get({
                    endpoint: 'works',
                    queries: { limit: 2 }
                });
                setWorks(data.contents);
            } catch (error) {
                console.error('データの取得に失敗しました:', error);
            }
        };

        getWorks();
    }, []);

    return (
        <section className="flex w-full max-w-2xl flex-col gap-8 py-4">
            <div className="flex items-center justify-center">
                <hr className="h-[2px] border-rubyred border-t-2 border-dashed w-4/5 md:w-full" />
                <h2 className="text-center text-2xl font-bold w-full md:text-3xl">Works</h2>
                <hr className="h-[2px] border-rubyred border-t-2 border-dashed w-4/5 md:w-full" />
            </div>
            {works.map((work) => (
                <a href={work.link} target="_blank" >
                    <div key={work.id} className="flex rounded-xl p-1 duration-300 hover:opacity-60 md:p-3">
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
            ))}
            <a href="/works" className="text-center text-base underline duration-300 hover:opacity-60">その他はこちら</a>
        </section>
    );
}

export default App;