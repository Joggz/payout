export interface Transaction {
    id: string;
    amount: number;
    type: 'inward' | 'outward';
    date: string;
}

export interface TransactionSlice {
    inward: Transaction[];
    outward: Transaction[];
    addTransaction: (tx: Transaction) => void;
    clearTransactions: () => void;
}

export const createTransactionSlice = (set: any, get: any, store: any): TransactionSlice => ({
    inward: [],
    outward: [],
    addTransaction: (tx) => {
        if (tx.type === 'inward') {
            set({ inward: [...get().inward, tx] });
        } else {
            set({ outward: [...get().outward, tx] });
        }
    },
    clearTransactions: () => set({ inward: [], outward: [] }),
});
