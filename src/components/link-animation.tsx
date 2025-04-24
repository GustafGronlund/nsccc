import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type LinkAnimationProps = {
  title: string;
  href: string;
  textColor?: string;
  fontSize?: string;
  activePath?: string;
};

export const LinkAnimation = ({
  title,
  href,
  textColor = '#29ABE2',
  fontSize,
  activePath,
}: LinkAnimationProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.li
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="relative flex h-fit items-center justify-center overflow-y-hidden"
    >
      <Link to={href}>
        <motion.p
          initial={{ translateY: 0 }}
          animate={{ translateY: isHover ? 20 : 0 }}
          transition={{ duration: 0.5 }}
          className={`font-tthoves absolute cursor-pointer text-base text-[${textColor}] ${fontSize} ${activePath === href ? 'underline' : ''}`}
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ translateY: 0 }}
          animate={{ opacity: 1, translateY: isHover ? 0 : -30 }}
          transition={{ duration: 0.5 }}
          className={`font-tthoves cursor-pointer text-base text-[${textColor}] ${fontSize} ${activePath === href ? 'underline' : ''}`}
        >
          {title}
        </motion.p>
      </Link>
    </motion.li>
  );
};
