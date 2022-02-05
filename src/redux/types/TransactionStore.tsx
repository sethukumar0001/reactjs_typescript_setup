export default interface TransactionStore {
    transactions: any[],
    errorMessage: string | null
    isLoading: boolean
}