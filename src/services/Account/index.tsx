import API from '../Api';

export const apiGetAccounts = (id : number) => API.get(`/v1/login/${id}/account`);
export const apiAddAccount = (id : number, form : object) => API.post(`/v1/login/${id}/account`, form);