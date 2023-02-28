import DentistCard, { DentistCardImageProps } from '@/components/card/DentistCard/DentistCard';
import Rating from '@/components/input/Rating/Rating';
import PersonImage from '@/components/media/PersonImage';

import JohnDoe from 'public/person/dentists/JohnDoe.jpeg';
import JaneDoe from 'public/person/dentists/JaneDoe.jpeg';

import styles from './dentist-search-results-list.module.scss';

const DENTIST_RATING_ARIA_LABEL = 'Dentist rating';

const dentists = [
    {
        id: 1,
        name: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue eleifend libero, eu scelerisque elit cursus in.',
        image: JohnDoe,
        rating: {
            value: 4.0,
            ratingsCount: 210
        }
    },
    {
        id: 2,
        name: 'Jane Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue eleifend libero, eu scelerisque elit cursus in.',
        image: JaneDoe,
        rating: {
            value: 4.7,
            ratingsCount: 40
        }
    }
];

export default function DentistSearchResultsList(): JSX.Element {
    return (
        <ul className={styles.list}>
            {
                dentists.map(dentist => (
                    <li className={styles['list-item']} key={dentist.id}>
                        <DentistCard
                            name={dentist.name}
                            bio={dentist.bio}
                            image={(props: DentistCardImageProps) => (
                                <PersonImage
                                    {...props}
                                    src={dentist.image}
                                    alt={`${dentist.name} image`}
                                />
                            )}
                            rating={
                                <Rating
                                    readonly
                                    value={dentist.rating.value}
                                    ratingsCount={dentist.rating.ratingsCount}
                                    ariaLabel={DENTIST_RATING_ARIA_LABEL}
                                />
                            }
                        />
                    </li>
                ))
            }
        </ul>
    );
}