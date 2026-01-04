import { useState, useEffect } from 'react';
import { client } from '../libs/client';
import type { Work } from '../types/microcms';
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'
import styles from '../styles/WorksPage.module.css';
import commonStyles from '../styles/common.module.css';
import Footer from '../components/top/footer';

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
                <section className={commonStyles.section}>
                    <div className={commonStyles.container}>
                        <div className={commonStyles.header}>
                            <h2 className={commonStyles.title}>つくったもの一覧</h2>
                        </div>
                        <div className={styles.worksListSection}>
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
                        </div>
                        <a href="/" className={styles.homeLink}>トップページに戻る</a>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
}
