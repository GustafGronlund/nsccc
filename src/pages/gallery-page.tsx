import { galleryPageImages } from '../utils/data';
import { useScrollReveal } from '../hooks';
import { Link } from 'react-router-dom';

export const GalleryPage = () => {
  const ScrollReveal = useScrollReveal;

  return (
    <div className="mx-auto mt-30 w-full px-8">
      <ScrollReveal delay={0} initialY={10} duration={1}>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {galleryPageImages.map((galleryImage, index) => (
            <Link
              to={galleryImage.path}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col">
                <div className="group relative mb-2 aspect-square overflow-hidden">
                  <img
                    src={galleryImage.image}
                    alt={`Image from the event year ${galleryImage.year}`}
                    className="h-full w-full cursor-pointer object-cover transition-transform duration-[1500ms] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-[#29ABE2] opacity-70 transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                    <span className="text-4xl font-medium text-white lg:text-6xl">
                      {galleryImage.year}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};
