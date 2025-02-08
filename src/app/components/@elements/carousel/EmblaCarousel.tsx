'use client'

// components/EmblaCarousel.tsx
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './EmblaCarousel.module.css';
import Autoplay from 'embla-carousel-autoplay';

interface EmblaCarouselProps {
    images: string[];
    height?: string;
    width?: string; // Array of image paths or URLs
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images, height = 'h-[8.5rem]', width = 'w-52'}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 2000})]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [emblaApi]);

    return (
        <div className={`${styles.embla} rounded-xl `} ref={emblaRef}>
            <div className={`${styles.embla__container} ${height} ${width}`}>
                {images.map((src, index) => (
                    <div className={`${styles.embla__slide} ${height} ${width}`} key={index}>
                        <Image
                            src={src}
                            alt={`carousel-image-${index}`}
                            fill
                            sizes='33vw 50vw'
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
