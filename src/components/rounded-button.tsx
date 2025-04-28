import { Link } from 'react-router-dom';
import arrowRight from '../assets/svg/arrow-right.svg';

interface RoundedButtonProps {
  text: string;
  link: string;
  primaryButton: boolean;
}

export const RoundedButton = ({
  text,
  link,
  primaryButton,
}: RoundedButtonProps) => {
  return (
    <>
      <Link
        to={link}
        className={`group mb-10 flex cursor-pointer flex-row items-center rounded-4xl ${primaryButton ? 'bg-[#29ABE2]' : 'bg-[#f9f8f2]'} px-8 py-2 lg:mb-10 lg:px-10 lg:py-3`}
      >
        <p
          className={`font-sans text-xl leading-tight font-light tracking-tighter ${primaryButton ? 'text-[#f9f8f2]' : 'text-[#29ABE2]'} `}
        >
          {text}
        </p>
        <img
          src={arrowRight}
          alt=""
          className="ml-3 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          style={{
            filter: primaryButton
              ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' // white
              : 'invert(57%) sepia(75%) saturate(1557%) hue-rotate(165deg) brightness(97%) contrast(101%)', // blue
          }}
        />
      </Link>
    </>
  );
};
