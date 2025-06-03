
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
      case 'Completed': return 'text-emerald-700 bg-emerald-100 border-emerald-200';
      case 'Pending': return 'text-amber-700 bg-amber-100 border-amber-200';
      case 'Failed': return 'text-rose-700 bg-rose-100 border-rose-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">Outward Transactions</h1>
          <p className="text-gray-600 mt-2">View and manage outgoing transactions</p>
        </div>
        <Button onClick={() => setIsFilterOpen(true)} className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Transactions Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50 rounded-t-lg">
          <CardTitle className="text-gray-800">All Outward Transactions</CardTitle>
        </CardHeader>
        <CardContent className="bg-white rounded-b-lg p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-semibold text-gray-700">Transaction ID</TableHead>
                <TableHead className="font-semibold text-gray-700">Date</TableHead>
                <TableHead className="font-semibold text-gray-700">To</TableHead>
                <TableHead className="font-semibold text-gray-700">Amount</TableHead>
                <TableHead className="font-semibold text-gray-700">Reference</TableHead>
                <TableHead className="font-semibold text-gray-700">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900">{transaction.id}</TableCell>
                  <TableCell className="text-gray-600">{transaction.date}</TableCell>
                  <TableCell className="text-gray-900">{transaction.to}</TableCell>
                  <TableCell className="font-medium text-gray-900">{transaction.amount}</TableCell>
                  <TableCell className="text-gray-600">{transaction.reference}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(transaction.status)}`}>
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
