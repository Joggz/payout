export interface userLogin {
    email: string;
    password: string;
}

export interface  registerBusinessAccount{
    email: string;
    password: string;
    contact_name: string;
    business_name: string;
    phone: string;
    address: string;
}

export interface TransactionRecord {
    sessionId: string;
    debitAccount: string;
    creditAccount: string;
    creditAmount: string; // Note: It's a formatted string with "$"
    narration: string;
    transactionReference: string;
    transactionStatus: string;
    datePosted: string; // ISO date string format
}

export const transactionRecords: TransactionRecord[] = [
    {
        sessionId: 'SES001',
        debitAccount: '1234567890',
        creditAccount: '0987654321',
        creditAmount: '$5,200',
        narration: 'Salary Payment',
        transactionReference: 'TXN-001-2024',
        transactionStatus: 'Completed',
        datePosted: '2024-01-15',
    },
    {
        sessionId: 'SES002',
        debitAccount: '1234567890',
        creditAccount: '1122334455',
        creditAmount: '$1,750',
        narration: 'Monthly Bonus',
        transactionReference: 'TXN-002-2024',
        transactionStatus: 'Completed',
        datePosted: '2024-01-31',
    },
    {
        sessionId: 'SES003',
        debitAccount: '1234567890',
        creditAccount: '5566778899',
        creditAmount: '$2,000',
        narration: 'Vendor Payment',
        transactionReference: 'TXN-003-2024',
        transactionStatus: 'Pending',
        datePosted: '2024-02-05',
    },
];


export interface TransactionSummary {
    id: string;
    date: string;
    amount: string;
    status: string;
    reference: string;
    to: string;
}

export const transactions: TransactionSummary[] = [
    {
        id: 'TXN101',
        date: '2024-01-15',
        amount: '$3,200',
        status: 'Completed',
        reference: 'OUT001',
        to: 'Vendor A',
    },
    {
        id: 'TXN102',
        date: '2024-01-18',
        amount: '$5,750',
        status: 'Pending',
        reference: 'OUT002',
        to: 'Vendor B',
    },
    {
        id: 'TXN103',
        date: '2024-01-20',
        amount: '$1,500',
        status: 'Failed',
        reference: 'OUT003',
        to: 'Vendor C',
    },
];

