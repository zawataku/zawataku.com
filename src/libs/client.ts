import { createClient } from 'microcms-js-sdk';
import type { Work } from '../types/microcms';

export type MicroCMSResponse = {
    contents: Work[];
    totalCount: number;
    offset: number;
    limit: number;
};

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
    throw new Error('microCMSの環境変数が設定されていません');
}

export const client = createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey,
});