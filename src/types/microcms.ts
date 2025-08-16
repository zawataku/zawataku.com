export type Work = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    images: {
        url: string;
        height: number;
        width: number;
    };
    category: string;
    description: string;
    tech: string;
    comment: string;
    link: string;
};