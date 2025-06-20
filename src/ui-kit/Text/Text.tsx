import React from "react";
import styles from './Text.module.scss';

import classNames from "classnames";


type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'  // Заголовки
  | 'body' | 'caption';          // Текстовые варианты

type TextWeight = 
  | 'thin'       // 100
  | 'light'      // 300
  | 'regular'    // 400
  | 'medium'     // 500
  | 'bold'       // 700
  | 'black';     // 900

interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  size?: number | string;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  weight = 'regular',
  color,
  size,
  align = 'center',
  style,
  className,
  children,
  onClick
}) => {
  const Tag = variant.startsWith('h') 
    ? variant : variant === 'body' 
      ? 'p' : 'span';

  const textStyle = {
    ...(color && { color }),
    ...(size && { fontSize: typeof size === 'number' 
      ? `${size}px` : size 
    }),
    ...style
  }

  const textClasses = classNames(
    styles.text,
    styles[`text--${variant}`],
    styles[`text--${weight}`],
    styles[`text--align-${align}`],
    className
  )
  
  return (
    <Tag 
      style={textStyle}
      className={textClasses}
      onClick={onClick}
    >
      { children }
    </Tag>
  )
}