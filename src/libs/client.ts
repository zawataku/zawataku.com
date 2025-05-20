import { createClient } from 'microcms-js-sdk';

export type News = {
    id: string;
    title: string;
    createdAt: string;
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

//一覧を取得
export const getNews = async () => {
    const news = await client.getList<News>({
        endpoint: "news",
        queries: { offset: 0, limit: 5 }
    });
    return news;
};


