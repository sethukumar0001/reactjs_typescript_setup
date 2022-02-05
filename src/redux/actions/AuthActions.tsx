import { apiLogin } from "../../services/APIs/auth.service";
import { LOADING, LOGIN, LOGOUT, REQUEST_ERROR } from "../reducers/AuthReducer";
import { AppDispatch } from "../types/AppDispatch";

const _LOGIN = (data: object) => ({
	type: LOGIN,
	payload: {
		data,
	},
});

const _LOGOUT = () => ({
	type: LOGOUT,
});

const _LOADING = () => ({
	type: LOADING,
});

const _REQUEST_ERROR = ({
	response: {
		data: { error = "Error" },
	},
}): any => ({
	type: REQUEST_ERROR,
	payload: {
		error,
	},
});

export const loginAction = (form: object) => (dispatch: AppDispatch) => {
	dispatch(_LOADING());
	apiLogin(form)
		.then((res: any) => {
			dispatch(_LOGIN(res));
		})
		.catch((error) => dispatch(_REQUEST_ERROR(error)));
};

export const logoutAction = () => (dispatch: AppDispatch) => {
	dispatch(_LOGOUT());
};
