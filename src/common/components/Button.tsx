import React from 'react';
import styled from '@emotion/styled';
import { ITheme } from '../../theme';

interface IButtonProps {
  children: React.ReactNode | string;
  onClick: () => void;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  disabled = false,
  onClick,
  ariaLabel,
  className,
}: IButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    disabled={disabled}
    className={className}
  >
    {children}
  </button>
);

const StyledButton = styled(Button)(({ theme }: { theme?: ITheme }) => ({
  backgroundColor: theme!.colors.button.bg,
  borderRadius: '0px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.2rem 1rem',
  '&:hover:not(:disabled)': {
    cursor: 'pointer',
    backgroundColor: theme!.colors.button.bgHover,
  },
}));

export default StyledButton;
