import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { loginAction } from "src/redux/actions/AuthActions";
import { AppState } from "src/redux/types/AppState";
import AuthStore from "src/redux/types/AuthStore";
import { globalDispatch } from "src/redux/utils/globalDispatch";
// import { useEffect } from "react";

const Login = () => {
	const { isLoading, errorMessage }: AuthStore = useSelector(
		(state: AppState) => state.auth
	);

	const handleValidation = () => {
		return Yup.object().shape({
			username: Yup.string().required("The email field is required"),
			password: Yup.string()
				.required("This Password field is required!")
				.min(5),
		});
	};

	const handleLogin = (formValue: object) => {
		globalDispatch(loginAction(formValue));
	};

	const initialValues = {
		source: "powerpay_ui",
		username: "",
		password:'',
	
	};

	return (
			<>
				<div
					className="wrapper-login"
					style={{
						margin: "auto",
						width: "50%",
						marginTop: "10%",
						// border: "3px solid green",
						padding: "30px",
						// alignItems:'center',
						marginLeft: "auto",
						marginRight: "auto",
						// textAlign: "center",
						// justifyContent: "center",
					}}
				>
					<h1 className="text-center">Login</h1> <br />
					<div className="form">
						<Formik
							initialValues={initialValues}
							validationSchema={handleValidation}
							onSubmit={handleLogin}
						>
							<Form>
								<label className="mt-2 mb-2">Username</label>
								<div className="form-group">
									<Field name="username" type="text" className="form-control" />
									<ErrorMessage
										name="username"
										component="div"
										className="badge bg-warning text-dark"
									/>
								</div>
								<label className="mt-2 mb-2">Password</label>
								<div className="form-group">
									<Field
										name="password"
										type="password"
										className="form-control"
									/>
									<ErrorMessage
										name="password"
										component="div"
										className="badge bg-warning text-dark"
									/>
								</div>
								{errorMessage && (
									<div className="form-group">
										<div className="alert-error">{errorMessage}</div>
									</div>
								)}
								{isLoading ? (
									<button 
									style={{border:'none',padding:'10px',marginTop:'30px',width:'660px',textAlign:'center'}}
									className="btn-blue align-center">
										<span>Please wait...</span>
									</button>
								) : (
									<button
										type="submit"
										className="btn-blue align-center"
										disabled={isLoading}
										style={{border:'none',padding:'10px',marginTop:'30px',width:'660px',textAlign:'center'}}
									>
										<span>Login</span>
									</button>
								)}
							</Form>
						</Formik>
					</div>
				</div>
			</>
	);
};

export default Login;
