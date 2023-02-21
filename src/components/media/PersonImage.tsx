import Image, { ImageProps } from 'next/image';
import personSvg from "public/person/person.svg";

type AvatarProps = Omit<ImageProps, 'src' | 'alt'> & {
    src: ImageProps['src'] | null;
    alt: ImageProps['alt'] | null;
}

export default function PersonImage(props: AvatarProps): JSX.Element {
    const {src, alt, ...otherImageProps} = props;
    let finalAlt: ImageProps['alt'];

    if (src) {
        if (alt) {
            finalAlt = alt;
        }
        else {
            finalAlt = 'Person image';
            console.error('It is required to provide an alt attribute for Avatar');
        }
    } else {
        finalAlt = 'Person with no image';
    }

    return (
        <Image
            src={src || personSvg}
            alt={alt || finalAlt}
            {...otherImageProps}
        />
    );
}