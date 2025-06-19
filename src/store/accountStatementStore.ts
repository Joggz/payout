import AccountStatement from "@/pages/AccountStatement.tsx";
import {getAccountStatement} from "../services/AccountStatment/account-statement.ts";

export interface AccountStatementSlice {
    fetchAccountStatement: () => Promise<void>;
    loading: boolean;
    error: Error | null;
    accountStatement: AccountStatementResponse[] | null;
}

export interface AccountStatementResponse {
    sessionId: string;
    paymentFor: string;
    transactionType: string;
    amount: number;
    narration: string;
    transactionReference: string;
    status: boolean;
}

export type AccountStatement =  AccountStatementResponse[];


export const CreateAccountStatementSlice = (set:any, get: any, store:any): AccountStatementSlice => ({
    accountStatement: null,
    loading: false,
    error: null,
    fetchAccountStatement: async() => {
        set({loading: true, error: null});
        try {
            const response: AccountStatement = await getAccountStatement();
            // make a type of AccountStatementResponse from response.
            set({loading: false, error: null, accountStatement: response });
        } catch (e) {
            console.error('returned with error', e);
            set({error: e, loading: false});
        }
    }
})