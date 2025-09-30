import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type LinkAnimationProps = {
  title: string;
  href: string;
  activePath?: string;
};

export const LinkAnimation = ({
  title,
  href,
  activePath,
}: LinkAnimationProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const isExternalLink = href.startsWith('http') || href.includes('.pdf');

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
      {isExternalLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <motion.p
            initial={{ translateY: 0 }}
            animate={{ translateY: isHover ? 20 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute cursor-pointer font-sans text-lg leading-tight tracking-tighter ${activePath === href ? 'text-[#29ABE2]' : 'text-[#383838]'}`}
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ translateY: -30 }}
            animate={{ opacity: 1, translateY: isHover ? 0 : -30 }}
            transition={{ duration: 0.5 }}
            className={`cursor-pointer font-sans text-lg leading-tight tracking-tighter ${activePath === href ? 'text-[#29ABE2]' : 'text-[#383838]'}`}
          >
            {title}
          </motion.p>
        </a>
      ) : (
        <Link to={href}>
          <motion.p
            initial={{ translateY: 0 }}
            animate={{ translateY: isHover ? 20 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute cursor-pointer font-sans text-lg leading-tight tracking-tighter ${activePath === href ? 'text-[#29ABE2]' : 'text-[#383838]'}`}
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ translateY: -30 }}
            animate={{ opacity: 1, translateY: isHover ? 0 : -30 }}
            transition={{ duration: 0.5 }}
            className={`cursor-pointer font-sans text-lg leading-tight tracking-tighter ${activePath === href ? 'text-[#29ABE2]' : 'text-[#383838]'}`}
          >
            {title}
          </motion.p>
        </Link>
      )}
    </motion.li>
  );
};
