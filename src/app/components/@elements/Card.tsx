import Image from "next/image";

export const Card = ({
  src,
  alt,
  height = 100,
  width = 100,
  title,
  description,
}: {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  title: string;
  description: string;
}) => (
  <div className="flex justify-start items-stretch flex-col text-left bg-gray-100 rounded-2xl p-5 gap-4">
    <Image
      src={src}
      alt={alt}
      className="rounded-xl"
      height={height}
      width={width}
    />

    <div className="div text-2xl font-bold">{title}</div>
    <span className="text-lg text-gray-700">{description}</span>
  </div>
);
