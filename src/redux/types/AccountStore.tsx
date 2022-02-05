export default interface AccountStore {
    accounts: any[],
    errorMessage: string | null
    isLoading: boolean,
    loaded: boolean,
}