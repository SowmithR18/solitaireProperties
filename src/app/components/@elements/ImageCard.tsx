import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";
export const ImageCard = ({
  src,
  alt,
  title,
  shortDescription,
  areDetailsAvailable = false,
  enableCarousel,
  className,
}: {
  src: string[];
  alt: string;
  title: string;
  shortDescription: string;
  areDetailsAvailable?: boolean;
  enableCarousel: boolean;
  className?: string;
}) => {
  const [scaledWidth, scaledHeight] = areDetailsAvailable
    ? [500, 400]
    : [200, 100];

  return (
    <div
      className={`flex flex-row items-start justify-between self-start text-[#575757] w-full h-40 rounded-xl bg-[#F2F7FF] p-3 ${className}`}
    >
      {enableCarousel ? (
        <EmblaCarousel
          images={src}
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
      <div className="flex w-44 px-3 flex-col items-start justify-between">
        <span className=" font-semibold text-lg mb-3 line-clamp-2">{title}</span>
        <div className=" text-gray-text line-clamp-2">{shortDescription}</div>
      </div>
    </div>
  );
};
