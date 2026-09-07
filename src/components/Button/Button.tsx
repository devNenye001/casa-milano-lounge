import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { HiArrowLongRight } from 'react-icons/hi2';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'white' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  animateArrow?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children = 'Go Home',
  variant = 'primary',
  size = 'md',
  showArrow = true,
  animateArrow = false,
  icon,
  href,
  target,
  rel,
  className = '',
  onClick,
  disabled,
  type = 'button',
  ...rest
}) => {
  // Base styles - NO GLOW as strictly requested
  const baseStyles =
    'group inline-flex items-center justify-center gap-2.5 font-medium rounded-full cursor-pointer transition-all duration-300 ease-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A922] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed shadow-none';

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm tracking-wide',
    md: 'px-8 py-3.5 text-base tracking-wide',
    lg: 'px-10 py-4 text-lg tracking-wider',
  };

  const variantStyles = {
    primary:
      'bg-[#F2A922] text-white hover:bg-[#d89317] active:bg-[#bf7f0f] border border-transparent shadow-none',
    white:
      'bg-white text-[#F2A922] hover:bg-neutral-100 active:bg-neutral-200 border border-transparent shadow-none',
    outline:
      'bg-transparent text-[#F2A922] border-2 border-[#F2A922] hover:bg-[#F2A922] hover:text-black shadow-none',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/15 backdrop-blur-sm shadow-none',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-transparent shadow-none',
  };

  const content = (
    <>
      <span className="font-dmsans font-medium transition-transform duration-300">
        {children}
      </span>
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-1.5 flex items-center">
          {icon}
        </span>
      ) : showArrow ? (
        animateArrow ? (
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center"
          >
            <HiArrowLongRight className="w-5 h-5" aria-hidden="true" />
          </motion.span>
        ) : (
          <HiArrowLongRight
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        )
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...(rest as any)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {content}
    </motion.button>
  );
};

export default Button;
