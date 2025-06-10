
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import FilterModal from '../components/FilterModal';
import { Filter } from 'lucide-react';

const InwardTransactions = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const transactions = [
    {
      sessionId: 'SES001',
      debitAccount: '1234567890',
      creditAccount: '0987654321',
      creditAmount: '$5,200',
      narration: 'Salary Payment',
      transactionReference: 'TXN-001-2024',
      transactionStatus: 'Completed',
      datePosted: '2024-01-15'
    },
    {
      sessionId: 'SES002',
      debitAccount: '1234567890',
      creditAccount: '1122334455',
      creditAmount: '$3,800',
      narration: 'Vendor Payment',
      transactionReference: 'TXN-002-2024',
      transactionStatus: 'Pending',
      datePosted: '2024-01-14'
    },
    {
      sessionId: 'SES003',
      debitAccount: '5566778899',
      creditAccount: '1234567890',
      creditAmount: '$2,100',
      narration: 'Invoice Settlement',
      transactionReference: 'TXN-003-2024',
      transactionStatus: 'Completed',
      datePosted: '2024-01-14'
    },
    {
      sessionId: 'SES004',
      debitAccount: '1234567890',
      creditAccount: '9988776655',
      creditAmount: '$1,500',
      narration: 'Utility Payment',
      transactionReference: 'TXN-004-2024',
      transactionStatus: 'Failed',
      datePosted: '2024-01-13'
    },
    {
      sessionId: 'SES005',
      debitAccount: '2233445566',
      creditAccount: '1234567890',
      creditAmount: '$4,200',
      narration: 'Contract Payment',
      transactionReference: 'TXN-005-2024',
      transactionStatus: 'Completed',
      datePosted: '2024-01-12'
    }
  ];


  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Applied filters:', newFilters);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inward Transactions</h1>
          <p className="text-gray-600 mt-2">View and manage incoming transactions</p>
        </div>
        <Button onClick={() => setIsFilterOpen(true)}>
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Inward Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                  <TableRow key={transaction.sessionId}>
                    <TableCell className="font-medium">{transaction.sessionId}</TableCell>
                    <TableCell>{transaction.debitAccount}</TableCell>
                    <TableCell>{transaction.creditAccount}</TableCell>
                    <TableCell className="font-medium">{transaction.creditAmount}</TableCell>
                    <TableCell>{transaction.narration}</TableCell>
                    <TableCell>{transaction.transactionReference}</TableCell>
                    <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.transactionStatus === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                            transaction.transactionStatus === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                'bg-rose-100 text-rose-700'
                    }`}>
                      {transaction.transactionStatus}
                    </span>
                    </TableCell>
                    <TableCell>{transaction.datePosted}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        title="Inward Transactions"
      />
    </div>
  );
};

export default InwardTransactions;
