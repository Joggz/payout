import { authorized} from "@/services/axios.ts";
import {fetchAccountStatement} from "@/services/AccountStatment/account-statement-routes.ts";
import {AccountStatement, AccountStatementResponse} from '@/store/accountStatementStore.ts'

const accountStatements: AccountStatementResponse[] = [
    {
        sessionId: 'abc123',
        paymentFor: 'Utility Bill',
        transactionType: 'Debit',
        amount: 7500,
        narration: 'Electricity payment for June',
        transactionReference: 'TXN001',
        status: true,
    },
    {
        sessionId: 'def456',
        paymentFor: 'Salary',
        transactionType: 'Credit',
        amount: 150000,
        narration: 'June Salary',
        transactionReference: 'TXN002',
        status: true,
    },
    {
        sessionId: 'ghi789',
        paymentFor: 'Internet Subscription',
        transactionType: 'Debit',
        amount: 5000,
        narration: 'Monthly internet renewal',
        transactionReference: 'TXN003',
        status: false,
    },
];

export const getAccountStatement = async (): Promise<AccountStatementResponse[]> => {
    try {
        const response = await authorized.get(fetchAccountStatement);
        console.log('success', response);
        // return response.data;
        return accountStatements;
    }catch(error) {
        console.error("error",error);
        throw error;
    }
}



