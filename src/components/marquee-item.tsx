import { motion } from 'framer-motion';

type MarqueeItemProps = {
  images: string[];
  from: number;
  to: string;
};

export const MarqueeItem = ({ images, from, to }: MarqueeItemProps) => {
  return (
    <motion.div
      initial={{ x: `${from}` }}
      animate={{ x: `${to}` }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="flex flex-shrink-0"
    >
      {images.map((image, index) => {
        return (
          <img
            className="h-150 w-120 object-cover pr-10"
            src={image}
            key={index}
          />
        );
      })}
    </motion.div>
  );
};
