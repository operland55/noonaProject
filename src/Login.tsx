import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 60%;
	margin: 0 auto;
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	input {
		width: 500px;
		padding: 10px 20px;
	}
	button {
		border: none;
		background-color: red;
		margin-top: 30px;
		padding: 10px 20px;
		cursor: pointer;
	}
`;
function Login({ setAuthenticate }: any) {
	const navigate = useNavigate();
	const loginUser = (e: any) => {
		e.preventDefault();
		setAuthenticate(true);
		navigate("/");
	};
	return (
		<>
			<Form onSubmit={(e) => loginUser(e)}>
				<div>
					<label htmlFor="email">Email addres</label>
					<input type="text" id="email" placeholder="Enter email" />
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input type="text" id="password" placeholder="Enter password" />
				</div>

				<button>Login</button>
			</Form>
		</>
	);
}

export default Login;
