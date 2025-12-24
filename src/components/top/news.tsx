import { useState, useEffect } from 'react';
import { client } from '../../libs/client';
import type { News } from '../../types/microcms';
import { DotPulse } from 'ldrs/react'
import 'ldrs/react/DotPulse.css'
import styles from './news.module.css';

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
    const [isLoading, setIsLoading] = useState(true);

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
            } finally {
                setIsLoading(false);
            }
        };

        getNews();
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <hr className={styles.separator} />
                <h2 className={styles.title}>更新情報</h2>
                <hr className={styles.separator} />
            </div>
            <ul className={styles.newsList}>
                {isLoading ? (
                    <div className={styles.loadingContainer}>
                        <DotPulse
                            size="50"
                            speed="1.3"
                            color="#991B1B"
                        />
                    </div>
                ) : (
                    news.map((item) => (
                        <li key={item.id} className={styles.newsItem}>
                            <span className={styles.date}>{formatDate(item.publishedAt)}</span>
                            <span dangerouslySetInnerHTML={{ __html: item.title }} />
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}
