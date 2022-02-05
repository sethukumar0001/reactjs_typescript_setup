import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthStore from "../../redux/types/AuthStore";
import { AppState } from "../../redux/types/AppState";
// import { getValue } from "src/redux/utils/lodash";

const Authenticated = ({ component: Component, ...rest }: any) => {
	// const {  access_token }: AuthStore = useSelector(
	// 	(state: AppState) => state.auth
	// );
	let access_token = localStorage.getItem('access_token')
	return (
		<Route
			{...rest}
			render={(props) =>
				access_token ? (
					<Redirect to="/input-module/dashboard" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default Authenticated;
