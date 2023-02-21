import * as React from 'react';

export interface DentistCardImageProps {
    className: string;
}

type DentistCardImageRenderFunction = (props: DentistCardImageProps) =>  JSX.Element;

interface DentistCardProps {
    name: string;
    bio: string;
    image: DentistCardImageRenderFunction | null;
    rating: JSX.Element;
}

export default function DentistCard(props: DentistCardProps): JSX.Element {
    const {name, bio, image, rating} = props;
    return (
        <article className="dentist-card" aria-label="Dentist card">
            <div className="dentist-card-image-container">
                {image?.({className: 'dentist-card-image'})}
            </div>
            <div className="dentist-card-content">
                <p aria-label="Dentist name">{name}</p>
                {rating}
                <p aria-label="Dentist bio">{bio}</p>
            </div>
        </article>
    );
}
