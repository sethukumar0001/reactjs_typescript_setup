import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoute from "./middlewares/AuthRoute";
import Authenticated from "./middlewares/Authenticated";
import Login from "../pages/Login/Login";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "src/pages/not-found-page";

const Routes = () => {
	return (
		<div>
			<ToastContainer
				theme="dark"
				position="bottom-center"
				autoClose={15000}
				transition={Slide}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				limit={2}
				pauseOnFocusLoss
				pauseOnHover
			/>

			<Switch>
				<Authenticated path="/" component={Login} />
				{/* <AuthRoute path="/" component={Dashboard} /> */}
			</Switch>
		</div>
	);
};

export default Routes;
