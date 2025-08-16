import { useState, useEffect } from 'react';
import { client } from '../../libs/client';
import type { News } from '../../types/microcms';

// 日付をフォーマットするヘルパー関数
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export default function News() {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await client.get({
                    endpoint: 'news',
                    queries: { limit: 5 }
                });
                setNews(data.contents);
            } catch (error) {
                console.error('ニュースの取得に失敗しました:', error);
            }
        };

        getNews();
    }, []);

    return (
        <section className="flex w-full max-w-2xl flex-col gap-8 py-4">
            <div className="flex items-center justify-center">
                <hr className="h-[2px] border-rubyred border-t-2 border-dashed w-4/5 md:w-full" />
                <h2 className="text-center text-2xl font-bold w-full md:text-3xl">更新情報</h2>
                <hr className="h-[2px] border-rubyred border-t-2 border-dashed w-4/5 md:w-full" />
            </div>
            <ul className='flex flex-col gap-2 text-base md:text-lg'>
                {news.map((item) => (
                    <li key={item.id} className='flex gap-5'>
                        <span>{formatDate(item.publishedAt)}</span>
                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    </li>
                ))}
            </ul>
        </section>
    );
}