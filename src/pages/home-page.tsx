import homePageVideo from '../assets/video/hero-video.mp4';
import { useScrollReveal } from '../hooks';

export const HomePage = () => {
  const ScrollReveal = useScrollReveal;

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center px-10 lg:px-20">
      <div className="flex w-full items-center justify-center">
        <ScrollReveal
          delay={0}
          duration={1}
          className="flex w-1/3 items-center justify-center"
        >
          <video
            src={homePageVideo}
            autoPlay
            loop
            muted
            playsInline
            className="block h-auto max-w-full"
            aria-label="Video with veteran cars driving on a road"
          ></video>
        </ScrollReveal>
      </div>
    </section>
  );
};
