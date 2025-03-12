import Image from "next/image";

export default function Background({
  src,
  flipImage = false,
  children,
}: {
  src: string;
  flipImage?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <Image
        alt="Mountains"
        src={src}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          transform: flipImage ? "scaleX(-1)" : "scaleX(1)",
          filter: "brightness(0.5)",
          marginRight: "5rem",
        }}
      />
      {children}
    </>
  );
}
