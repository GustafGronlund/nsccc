import Marquee from 'react-fast-marquee';

export type MarqueeImagesProps = {
  images: string[];
  speed: number;
  direction: 'left' | 'right' | 'up' | 'down';
};

export const MarqueeImages = ({
  images,
  speed,
  direction,
}: MarqueeImagesProps) => {
  return (
    <>
      <Marquee
        gradient={true}
        gradientColor="#F3EEE9"
        gradientWidth={0}
        play={true}
        speed={speed}
        direction={direction}
        pauseOnHover={false}
        autoFill={true}
      >
        {images.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt="Bild på tomat"
            className="mr-3 h-[200px] w-[150px] object-cover lg:h-[500px] lg:w-[400px]"
          />
        ))}
      </Marquee>
    </>
  );
};
