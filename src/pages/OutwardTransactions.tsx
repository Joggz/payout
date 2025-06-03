
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import FilterModal from '../components/FilterModal';
import { Filter } from 'lucide-react';

const OutwardTransactions = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const transactions = [
    { id: 'TXN101', date: '2024-01-15', amount: '$3,200', status: 'Completed', reference: 'OUT001', to: 'Vendor A' },
    { id: 'TXN102', date: '2024-01-14', amount: '$1,800', status: 'Pending', reference: 'OUT002', to: 'Supplier B' },
    { id: 'TXN103', date: '2024-01-14', amount: '$5,100', status: 'Completed', reference: 'OUT003', to: 'Partner C' },
    { id: 'TXN104', date: '2024-01-13', amount: '$2,500', status: 'Failed', reference: 'OUT004', to: 'Client D' },
    { id: 'TXN105', date: '2024-01-12', amount: '$4,200', status: 'Completed', reference: 'OUT005', to: 'Service E' },
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
          <h1 className="text-3xl font-bold text-gray-900">Outward Transactions</h1>
          <p className="text-gray-600 mt-2">View and manage outgoing transactions</p>
        </div>
        <Button onClick={() => setIsFilterOpen(true)}>
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Outward Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.to}</TableCell>
                  <TableCell className="font-medium">{transaction.amount}</TableCell>
                  <TableCell>{transaction.reference}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </TableCell>
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
        title="Outward Transactions"
      />
    </div>
  );
};

export default OutwardTransactions;
