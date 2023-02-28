interface RatingProps {
    readonly: boolean;
    value: number;
    ratingsCount: number;
    ariaLabel: string;
}

export default function Rating(props: RatingProps): JSX.Element | null {
    const {readonly, value, ratingsCount, ariaLabel} = props;
    return readonly ? (
        <article aria-label={ariaLabel}>
            <p aria-label="Rating value">{value} out of 5 stars <small>({ratingsCount} ratings)</small></p>
        </article>
    ) : null;
}