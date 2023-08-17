import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: React.FC<ButtonProps>;

export { Button };
