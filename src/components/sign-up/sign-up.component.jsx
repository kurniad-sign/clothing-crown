import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.action';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
	const [userSignUp, setUserSignUp] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userSignUp;

	const handleChange = event => {
		const { name, value } = event.target;
		setUserSignUp({ ...userSignUp, [name]: value });
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (confirmPassword !== password) {
			alert("Password don't match");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					label="Display Name"
					value={displayName}
					onChange={handleChange}
					required
				/>
				<FormInput
					type="email"
					name="email"
					label="Email"
					value={email}
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					value={confirmPassword}
					onChange={handleChange}
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
	null,
	mapDispatchToProps
)(SignUp);
