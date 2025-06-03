
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import FilterModal from '../components/FilterModal';
import { Filter, Download } from 'lucide-react';

const AccountStatement = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const statements = [
    { id: 'STMT001', date: '2024-01-15', description: 'Payment from ABC Corp', type: 'Credit', amount: '+$5,200', balance: '$35,160' },
    { id: 'STMT002', date: '2024-01-14', description: 'Payment to Vendor A', type: 'Debit', amount: '-$3,200', balance: '$29,960' },
    { id: 'STMT003', date: '2024-01-14', description: 'Payment from XYZ Ltd', type: 'Credit', amount: '+$3,800', balance: '$33,160' },
    { id: 'STMT004', date: '2024-01-13', description: 'Service charges', type: 'Debit', amount: '-$50', balance: '$29,360' },
    { id: 'STMT005', date: '2024-01-12', description: 'Payment from JKL Corp', type: 'Credit', amount: '+$7,200', balance: '$29,410' },
  ];

  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Applied filters:', newFilters);
  };

  const handleDownload = () => {
    console.log('Downloading account statement...');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Account Statement</h1>
          <p className="text-gray-600 mt-2">Complete transaction history and account balance</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setIsFilterOpen(true)} variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Current Balance */}
      <Card>
        <CardHeader>
          <CardTitle>Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">$35,160.00</div>
          <div className="text-sm text-gray-600 mt-1">As of January 15, 2024</div>
        </CardContent>
      </Card>

      {/* Statement Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statements.map((statement) => (
                <TableRow key={statement.id}>
                  <TableCell>{statement.date}</TableCell>
                  <TableCell>{statement.description}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statement.type === 'Credit' 
                        ? 'text-green-600 bg-green-100' 
                        : 'text-red-600 bg-red-100'
                    }`}>
                      {statement.type}
                    </span>
                  </TableCell>
                  <TableCell className={`font-medium ${
                    statement.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {statement.amount}
                  </TableCell>
                  <TableCell className="font-medium">{statement.balance}</TableCell>
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
        title="Account Statement"
      />
    </div>
  );
};

export default AccountStatement;
