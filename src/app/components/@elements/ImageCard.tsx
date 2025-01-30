import Image from "next/image";
import EmblaCarousel, { ImageCarouselProps } from "./carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { Card } from "./Card";

export const ImageCard = ({
  src,
  alt,
  title,
  description,
  shortDescription,
  areDetailsAvailable = false,
  enableCarousel,
  className,
}: {
  src: string[];
  alt: string;
  title: string;
  description: string;
  shortDescription: string;
  areDetailsAvailable?: boolean;
  enableCarousel: boolean;
  className?: string;
}) => {
  const [scaledWidth, scaledHeight] = areDetailsAvailable
    ? [500, 400]
    : [200, 100];

  const carouselProps: ImageCarouselProps[] = src.map((image) => ({
    src: image,
    alt: alt,
    width: scaledWidth,
    height: scaledHeight,
  }));

  const carouselOptions: EmblaOptionsType = {
    loop: true,
  };

  return (
    <div
      className={`flex flex-row items-start justify-between self-start text-[#575757] w-full h-40 rounded-xl bg-[#F2F7FF] p-3 ${className}`}
    >
      {enableCarousel ? (
        <EmblaCarousel
          images={carouselProps}
          enableButtons={false}
          options={carouselOptions}
        />
      ) : (
        <Image
          src={src[0]}
          alt={alt}
          width={scaledWidth}
          height={scaledHeight}
          className={className}
        />
      )}
      {areDetailsAvailable ? (
        <div className="flex p-3 px-7 flex-col items-start justify-between">
          <span className="font-semibold text-lg mb-2">{title}</span>
          <div className="text-lg mb-6">{description}</div>
          <div className="grid grid-cols-2 grid-rows-2">
            <Image
              src="/villa.svg"
              alt="villa"
              className="rounded-xl"
              height={50}
              width={50}
            />
            <Image
              src="/payment.svg"
              alt="villa"
              className="rounded-xl"
              height={50}
              width={50}
            />
            <div>
              <div className="div font-bold">Modern Villa</div>
              <span className="text-gray-700 text-sm">
                When unknown printer took galley of type and scrambled.
              </span>
            </div>
            <div>
              <div className="div font-bold">Secure Payment</div>
              <span className="text-gray-700 text-sm">
                When unknown printer took galley of type and scrambled.
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex p-3 flex-col items-start justify-between">
          <span className=" font-semibold text-lg mb-3">{title}</span>
          <div className=" text-lg">{shortDescription}</div>
        </div>
      )}
    </div>
  );
};
