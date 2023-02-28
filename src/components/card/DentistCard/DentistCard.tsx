import * as React from 'react';
import styles from './dentist-card.module.scss';

export type DentistCardImageProps = {
    fill: boolean;
    className: string;
}

type DentistCardImageRenderFunction = (props: DentistCardImageProps) => JSX.Element;

interface DentistCardProps {
    name: string;
    bio: string;
    image: DentistCardImageRenderFunction;
    rating: JSX.Element;
}

export default function DentistCard(props: DentistCardProps): JSX.Element {
    const {name, bio, image, rating} = props;
    return (
        <div className={styles.main} aria-label="Dentist card">
            <div className={styles['dentist-card-picture-container']}>
                { image({fill: true, className: styles['dentist-card-picture']}) }
            </div>
            <div className={styles['dentist-card-content']}>
                <p className={styles['dentist-name']} aria-label="Dentist name">{name}</p>
                <div className={styles['dentist-rating-container']}>
                    {rating}
                </div>
                <p className={styles['dentist-bio']} aria-label="Dentist bio">{bio}</p>
            </div>
        </div>
    );
}
