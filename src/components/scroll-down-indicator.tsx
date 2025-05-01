import { motion, useScroll, useTransform } from 'framer-motion';
import { SVG } from '../utils';
import { useScrollReveal } from '../hooks';

export const ScrollDownIndicator = () => {
  const ScrollReveal = useScrollReveal;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <ScrollReveal delay={0.8} initialY={0} duration={1} forceAnimate={true}>
      <motion.div
        className="fixed right-6 z-40 flex h-15 w-15 items-center justify-center rounded-full bg-white lg:h-20 lg:w-20"
        initial={{ bottom: '0' }}
        animate={{
          bottom: 24,
          transition: { duration: 1, ease: 'easeOut' },
        }}
        whileInView={{
          bottom: [24, 60, 24],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
        style={{ opacity }}
      >
        <img
          src={SVG.ARROW_RIGHT}
          alt=""
          className="h-5 w-5 rotate-90 transform transition-transform duration-300 ease-in-out group-hover:translate-y-1 lg:h-6 lg:w-6"
          style={{
            filter:
              'invert(57%) sepia(75%) saturate(1557%) hue-rotate(165deg) brightness(97%) contrast(101%)',
          }}
        />
      </motion.div>
    </ScrollReveal>
  );
};
