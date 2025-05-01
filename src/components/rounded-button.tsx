import { Link } from 'react-router-dom';
import arrowRight from '../assets/svg/arrow-right.svg';

interface RoundedButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  primaryButton: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  target?: string;
  rel?: string;
}

export const RoundedButton = ({
  text,
  link,
  primaryButton,
  onClick,
  type,
  target,
  rel,
}: RoundedButtonProps) => {
  const buttonClasses = `group flex cursor-pointer flex-row items-center rounded-4xl ${
    primaryButton ? 'bg-[#29ABE2]' : 'bg-[#f9f8f2]'
  } px-8 py-2 lg:px-10 lg:py-3`;

  const textClasses = `font-sans text-xl leading-tight font-light tracking-tighter ${
    primaryButton ? 'text-[#f9f8f2]' : 'text-[#29ABE2]'
  }`;

  const imgStyle = {
    filter: primaryButton
      ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' // white
      : 'invert(57%) sepia(75%) saturate(1557%) hue-rotate(165deg) brightness(97%) contrast(101%)', // blue
  };

  const imgClasses =
    'ml-3 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1';

  if (type === 'submit' || type === 'reset') {
    return (
      <button type={type} onClick={onClick} className={buttonClasses}>
        <p className={textClasses}>{text}</p>
        <img src={arrowRight} alt="" className={imgClasses} style={imgStyle} />
      </button>
    );
  }

  return (
    <Link
      to={link || ''}
      onClick={onClick}
      className={buttonClasses}
      target={target}
      rel={rel}
    >
      <p className={textClasses}>{text}</p>
      <img src={arrowRight} alt="" className={imgClasses} style={imgStyle} />
    </Link>
  );
};
