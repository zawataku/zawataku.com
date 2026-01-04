import { useState, useEffect } from 'react';
import { client } from '../../libs/client';
import type { Work } from '../../types/microcms';
import { DotPulse } from 'ldrs/react'
import 'ldrs/react/DotPulse.css'
import styles from '../../styles/works.module.css';
import commonStyles from '../../styles/common.module.css';

export default function Works() {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
            } finally {
                setIsLoading(false);
            }
        };

        getWorks();
    }, []);

    return (
        <section className={commonStyles.section}>
            <div className={commonStyles.container}>
                <div className={commonStyles.header}>
                    <hr className={styles.separator} />
                    <h2 className={commonStyles.title}>つくったもの</h2>
                    <hr className={styles.separator} />
                </div>
                {isLoading ? (
                    <div className={styles.loadingContainer}>
                        <DotPulse
                            size="50"
                            speed="1.3"
                            color="#991B1B"
                        />
                    </div>
                ) : (
                    works.map((work) => (
                        <a key={work.id} href={work.link} target="_blank" >
                            <div className={styles.workItem}>
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
                <a href="/works" className={styles.moreLink}>その他はこちら</a>
            </div>
        </section>
    );
}
