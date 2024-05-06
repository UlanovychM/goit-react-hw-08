import styled from 'styled-components';

export const Text = styled.span`
	display: inline-block;
	min-width: 230px;
`;

export const Button = styled.button`
	width: 120px;
	padding-top: 4px;
	padding-bottom: 4px;
	margin-top: 10px;
	border: 1px solid #c4b5c2;
	border-radius: 4px;
	cursor: pointer;
	background-color: transparent;
	transition: background-color 0.5s ease;

	&:hover,
	&:focus {
		background-color: #c4b5c2;
	}
`;
