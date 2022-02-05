export default interface AuthStore {
  user: any;
  access_token: any;
  refresh_token: any;
  session_state: any;
  token_type: any;
  scope: any;
  errorMessage: string | null;
  isLoading: boolean;
}
