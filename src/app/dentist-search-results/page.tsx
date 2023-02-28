import DentistSearchResultsList from '@/components/list/DentistSearchResultsList/DentistSearchResultsList';
import styles from './page.module.scss';

export default function DentistSearchResultsPage(): JSX.Element {
    return (
        <main>
            <div className={styles.container}>
                <h1 className={styles.h1}>Results:</h1>
                <div className={styles['dentist-search-reasults-wrapper']}>
                    <DentistSearchResultsList />
                </div>
            </div>
        </main>
    )
}