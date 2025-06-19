import {TransactionRecord, transactionRecords, transactions, TransactionSummary} from '@/services/utilites/serviceType.ts'
import {getTransactionByTpe} from "@/services/Transactions/transaction.ts";
import {AccountStatement} from "@/store/accountStatementStore.ts";
export interface Transaction {
    id: string;
    amount: number;
    type: 'inward' | 'outward';
    date: string;
}

export interface TransactionSlice {
    inward: TransactionSummary[];
    outward: TransactionSummary[];
    loading: boolean;
    error: Error;
    // addTransaction: (tx: Transaction) => void;
    // clearTransactions: () => void;
    getTransactions: (type: string) => Promise<TransactionSummary[]>;
}

export const createTransactionSlice = (set: any, get: any, store: any): TransactionSlice => ({
    inward: [],
    outward: [],
    loading: false,
    error: null,
    getTransactions: async (type) => {
        set({loading: false, error: null,});
        try {
            // const response: TransactionRecord[] = await getTransactionByTpe(type);
            if(type === "inward") {
                set({loading: false, error: null, inward: transactions});
            }else {
                set({loading: false, error: null, outward: transactions});
            }
        } catch (e) {
            console.error('returned with error', e);
            set({error: e, loading: false});

        }
        return  transactions;
    }
    // addTransaction: (tx) => {
    //     if (tx.type === 'inward') {
    //         set({ inward: [...get().inward, tx] });
    //     } else {
    //         set({ outward: [...get().outward, tx] });
    //     }
    // },
    // clearTransactions: () => set({ inward: [], outward: [] }),
});
