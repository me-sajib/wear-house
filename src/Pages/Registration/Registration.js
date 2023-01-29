import axios from "axios";
import { sendEmailVerification } from "firebase/auth";
import React, { useEffect } from "react";
import {
	useAuthState,
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/Social/SocialLogin";
import Spinner from "../Shared/Spinner";

const Registration = () => {
	const [alreadyUser] = useAuthState(auth);

	// email and password for sign up state
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	// update user name
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	// send email verification to user
	const [sendEmailVerification, sending] = useSendEmailVerification(auth);
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	// register user
	const registrationUser = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;
		if (
			name === "" ||
			email === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			return toast.error("Please fill all fields");
		}
		if (password !== confirmPassword) {
			return toast.error("Passwords do not match");
		}

		// email verification link send

		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName: name });
		await sendEmailVerification();
		const { data } = await axios.post("http://localhost:5000/addToken", {
			email,
		});
		// console.log(data);
		localStorage.setItem("token", data.token);
	};
	useEffect(() => {
		if (user) {
			navigate(from, { replace: true });
		}
	}, [user]);

	useEffect(() => {
		if (alreadyUser) {
			navigate("/");
		}
	}, [alreadyUser]);

	return (
		<div className="bg-dark form-body light-border">
			<div className="form-body container">
				<div className="row">
					<div className="form-holder">
						<div className="form-content">
							<div className="form-items py-5">
								<h3 className="text-white pb-3 text-center">
									Registration
								</h3>
								<form
									className="requires-validation form-user"
									onSubmit={registrationUser}
								>
									<div className="col-md-12 mb-3">
										<input
											className="form-control"
											type="text"
											name="name"
											placeholder="Full Name"
											required
										/>
									</div>

									<div className="col-md-12 mb-3">
										<input
											className="form-control"
											type="email"
											name="email"
											placeholder="E-mail Address"
											required
										/>
									</div>

									<div className="col-md-12 mb-3">
										<input
											className="form-control"
											type="password"
											name="password"
											placeholder="Password"
											required
										/>
									</div>
									<div className="col-md-12 mb-3">
										<input
											className="form-control"
											type="password"
											name="confirmPassword"
											placeholder="confirm Password"
											required
										/>
									</div>
									{
										// if loading is true
										loading && <Spinner />
									}
									{
										// if any error
										error && (
											<div className="alert alert-danger">
												{error.message}
											</div>
										)
									}
									<div className="form-button mt-3">
										<button
											id="submit"
											type="submit"
											className="btn btn-primary"
										>
											Register
										</button>
									</div>

									<div className="already-login text-light">
										already have an account?{" "}
										<Link to="/login">Login now </Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SocialLogin />
		</div>
	);
};

export default Registration;
