import { galleryPageImages } from '../utils/data';
import { useScrollReveal } from '../hooks';
import { Link } from 'react-router-dom';

export const GalleryPage = () => {
  const ScrollReveal = useScrollReveal;

  return (
    <div className="max-w-10xl mx-auto mt-30 px-8">
      <ScrollReveal delay={0} initialY={10} duration={1}>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {galleryPageImages.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col">
                <div className="mb-2 aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Gallery image ${item.year}`}
                    className="h-full w-full cursor-pointer object-cover transition-transform duration-[1500ms] hover:scale-103"
                  />
                </div>
                <div className="font-normal text-[#383838]">{item.year}</div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};
