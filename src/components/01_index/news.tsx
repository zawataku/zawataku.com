import { getNews } from "@/libs/client";

import news_styles from "../../styles/01_index/news.module.css";

export default async function News() {
    const { contents } = await getNews();

    if (!contents) {
        return <p>更新情報がありません</p>;
    }

    return (
        <ul className={news_styles.news_list}>
            {contents.map((news) => (
                <li key={news.id} className={news_styles.news_item}>
                    <p className={news_styles.news_date}>{new Date(news.createdAt).toLocaleDateString('sv-SE')}</p>
                    <p className={news_styles.news_title}>{news.title}</p>
                </li>
            ))}
        </ul>
    );
}