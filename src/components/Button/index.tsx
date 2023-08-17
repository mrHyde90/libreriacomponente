import React from 'react';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
	text,
	disabled,
	onClick,
	...props
}) => {
	return (
		<button onClick={onClick} disabled={disabled}>
			{
				text
			}
		</button>
	);
};

export default Button;
