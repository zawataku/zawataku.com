import { useState, useEffect } from 'react';
import { client } from '../libs/client';
import type { Work } from '../types/microcms';
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'
import styles from './WorksPage.module.css';

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
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h1 className={styles.title}>-- Works --</h1>
                    <h1 className={styles.subtitle}>自慢の制作物たち</h1>
                    <section className={styles.worksListSection}>
                        {isLoading ? (
                            <div className={styles.loadingContainer}>
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
                                    <div className={styles.workItemContainer}>
                                        {work.images && (
                                            <img
                                                src={work.images.url}
                                                alt={work.title}
                                                className={styles.workImage}
                                            />
                                        )}
                                        <div className={styles.workContent}>
                                            <h3 className={styles.workTitle}>{work.title}</h3>
                                            <p className={styles.workDescription}>{work.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )}
                    </section>
                    <a href="/" className={styles.homeLink}>トップページに戻る</a>
                </section>
            </div>
        </main>
    );
}
