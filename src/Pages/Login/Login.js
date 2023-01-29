import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	useAuthState,
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/Social/SocialLogin";
import Spinner from "../Shared/Spinner";
import "./css/Login.css";
const Login = () => {
	const [email, setEmail] = useState("");

	// sign in email and password state
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	// reset password email send state
	const [sendPasswordResetEmail, sending, errors] =
		useSendPasswordResetEmail(auth);
	// navigate to the page
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const loginUser = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		await signInWithEmailAndPassword(email, password);
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

	return (
		<div className="bg-dark form-body light-border">
			<div className=" container">
				<div className="row w-75 mx-auto py-5">
					<h3 className="text-white pb-3 text-center">
						WELCOME BACK,{" "}
						<b className="text-primary">PLEASE LOGIN</b>
					</h3>
					<form className="form-user" onSubmit={loginUser}>
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
						{loading && <Spinner />}
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
								LOGIN
							</button>
						</div>
						{/* forgat password modal add */}
						<button
							type="button"
							className="btn btn-link"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
						>
							forgat password?
						</button>

						<div
							className="modal fade"
							id="exampleModal"
							tabIndex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								{/* success and spinner show */}
								{sending && <Spinner />}

								<div className="modal-content bg-dark text-light">
									<div className="modal-header">
										<h5
											className="modal-title"
											id="exampleModalLabel"
										>
											Enter your email address
										</h5>
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div className="modal-body">
										<input
											type="email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											className="form-control"
											placeholder="enter your email"
										/>
										{
											// if any error
											errors && (
												<div className="alert alert-danger">
													{errors.message}
												</div>
											)
										}
										<button
											onClick={async () => {
												await sendPasswordResetEmail(
													email
												);
												toast.success(
													"send reset password email"
												);
												setEmail("");
											}}
											className="btn btn-primary mt-2"
										>
											send code
										</button>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-bs-dismiss="modal"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="already-login text-light">
							Don't have an account?{" "}
							<Link to="/registration">registration now </Link>
						</div>
					</form>
				</div>
			</div>
			<SocialLogin />
		</div>
	);
};

export default Login;
