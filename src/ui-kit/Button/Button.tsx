import React from "react";
import styles from './Button.module.scss';
import classNames from "classnames";

type ButtonColor = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger' 
  | 'warning'
  | 'custom';

type ButtonCustomColor = {
  color: string;
  backgroundColor: string;
}

type ButtonType = 'submit' | 'reset' | 'button';

interface ButtonProps {
  text: string;
  type: ButtonType;
  width?: number | string;
  height?: number | string;
  color?: ButtonColor;
  backgroundColor?: string;
  customColor?: ButtonCustomColor; // Для color='custom'
  disabled?: boolean;
  borderRadius?: number | string;
  fontSize?: string | number;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  gap?: number | string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  width = 'auto',
  height = '44px',
  color = 'primary',
  backgroundColor,
  customColor,
  disabled = false,
  borderRadius = '22px',
  fontSize = '16px',
  icon,
  iconPosition,
  gap = '5px',
  style,
  className,
  onClick
}) => {
  const buttonStyle = {
    width: typeof width === 'number' 
      ? `${width}px` : width,
    height: typeof height === 'number' 
      ? `${height}px` : height,
    ...(color && { color: color }),
    ...(backgroundColor && { backgroundColor: backgroundColor}),
    ...(color === 'custom' && customColor && { 
      color: customColor.color,
      backgroundColor: customColor.backgroundColor
    }),
    borderRadius: typeof borderRadius === 'number' 
      ? `${borderRadius}px` : borderRadius,
    fontSize: typeof fontSize === 'number' 
      ? `${fontSize}px` : fontSize,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    ...style
  }

  const buttonClasses = classNames(
    styles.button,
    styles[`button--${color}`],
    disabled ? styles['button--disabled'] : '',
    className
  )

  return (
    <button 
      type={type}
      style={buttonStyle}
      className={buttonClasses}
      onClick={onClick}
      >
      {icon && iconPosition === 'left' && (
        <span className={styles.iconLeft}>{icon}</span>
      )}
      { text }
      {icon && iconPosition === 'right' && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </button>
  )
}