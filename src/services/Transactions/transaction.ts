import {TransactionRecord, transactionRecords}  from'../utilites/serviceType.ts'
import {authorized} from "@/services/axios.ts";
import {fetchTransactions} from "@/services/Transactions/transaction-routes.ts";





export const getTransactionByTpe = async (type: string): Promise<TransactionRecord[]> => {
    try {
        const response = await authorized.get(`${fetchTransactions}/${type}`);
        console.log('success', response);
        // return response.data;
        return transactionRecords;
    }catch(error) {
        console.error("error",error);
        throw error;
    }
}

