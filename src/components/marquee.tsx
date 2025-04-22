import { MarqueeItem } from '.';

type MarqueeProps = {
  images: string[];
};

export const Marquee = ({ images }: MarqueeProps) => {
  return (
    <div className="w-full">
      <MarqueeItem images={images} from={0} to={'-100%'} />
    </div>
  );
};
