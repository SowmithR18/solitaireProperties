import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";

export const DetailedImageCard = ({
    src,
    alt,
    title,
    description,
    areDetailsAvailable = false,
    enableCarousel,
    className,
}: {
    src: string[];
    alt: string;
    title: string;
    description: string;
    areDetailsAvailable?: boolean;
    enableCarousel: boolean;
    className?: string;
}) => {

    const [scaledWidth, scaledHeight] = areDetailsAvailable
        ? [500, 400]
        : [200, 100];

    return (<div
        className={`flex flex-row items-start justify-between self-start text-[#575757] w-full h-40 rounded-xl bg-[#F2F7FF] p-3 ${className}`}
    >
        {enableCarousel ? (
            <EmblaCarousel
                images={src}
                height={'min-h-[18.5rem]'}
                width={'w-[36rem]'}
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
        <div className="flex w-full md:w-[40rem] relative p-4 px-7 flex-col items-start justify-between">
            <span className="font-semibold text-lg mb-2">{title}</span>
            <div className="text-lg mb-4 leading-relaxed line-clamp-3">{description}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
                <Image
                    src="/svgs/villa.svg"
                    alt="villa"
                    className="rounded-xl"
                    height={50}
                    width={50}
                />
                <Image
                    src="/svgs/payment.svg"
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
    </div>);
}