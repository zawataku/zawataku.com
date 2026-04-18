import type { Work } from '../types/microcms';
import type { News } from '../types/microcms';

export type MicroCMSResponse = {
    contents: Work[];
    totalCount: number;
    offset: number;
    limit: number;
};

export type MicroCMSNewsResponse = {
    contents: News[];
    totalCount: number;
    offset: number;
    limit: number;
};

export const getWorks = async (limit: number = 50): Promise<MicroCMSResponse> => {
    const response = await fetch(`/api/works?limit=${limit}`);
    if (!response.ok) {
        throw new Error('データの取得に失敗しました');
    }
    return response.json();
};

export const getNews = async (limit: number = 5): Promise<MicroCMSNewsResponse> => {
    const response = await fetch(`/api/news?limit=${limit}`);
    if (!response.ok) {
        throw new Error('データの取得に失敗しました');
    }
    return response.json();
};