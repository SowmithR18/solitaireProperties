"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouseldButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import { Project } from "../../projects/FeaturedProjects";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export type ImageCarouselProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type PropType = {
  images: ImageCarouselProps[];
  options?: EmblaOptionsType;
  enableButtons?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { images, options, enableButtons } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={`${styles.embla__viewport} h-36`} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
      {enableButtons && (
        <div className={styles.embla__controls}>
          <div className={styles.embla__buttons}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
