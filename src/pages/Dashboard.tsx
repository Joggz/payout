
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft, DollarSign, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppStore } from '../store';


const Dashboard = () => {
  const stats = [
    {
      title: 'Total Inward',
      value: '$124,580',
      change: '+12.5%',
      icon: ArrowDownLeft,
      color: 'text-emerald-600',
      bgColor: 'bg-gradient-to-br from-emerald-500 to-green-600',
      lightBg: 'bg-emerald-50'
    },
    {
      title: 'Total Outward',
      value: '$89,420',
      change: '+8.2%',
      icon: ArrowUpRight,
      color: 'text-rose-600',
      bgColor: 'bg-gradient-to-br from-rose-500 to-red-600',
      lightBg: 'bg-rose-50'
    },
    {
      title: 'Net Balance',
      value: '$35,160',
      change: '+4.3%',
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      lightBg: 'bg-blue-50'
    },
    {
      title: 'Growth',
      value: '23.5%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-500 to-violet-600',
      lightBg: 'bg-purple-50'
    }
  ];

  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);
  const dashboardstat = useAppStore((state) => state.stats)

  // const clearError = useAppStore((state) => state.clearError);
  console.log("dashboardstat", dashboardstat)
  // const recentTransactions = [
  //   { id: 1, type: 'Inward', amount: '$5,200', status: 'Completed', date: '2024-01-15' },
  //   { id: 2, type: 'Outward', amount: '$3,800', status: 'Pending', date: '2024-01-14' },
  //   { id: 3, type: 'Inward', amount: '$2,100', status: 'Completed', date: '2024-01-14' },
  //   { id: 4, type: 'Outward', amount: '$1,500', status: 'Failed', date: '2024-01-13' },
  // ];

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

  if (loading) return <div className='w-full mx-auto  text-center '>Loading dashboard...</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your account activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className={`flex flex-row items-center justify-between space-y-0 pb-2 ${stat.lightBg} rounded-t-lg`}>
              <CardTitle className="text-sm font-medium text-gray-700">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="bg-white rounded-b-lg">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-emerald-600 mt-1 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
          <CardTitle className="text-gray-800">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="bg-white rounded-b-lg p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session ID</TableHead>
                <TableHead>Debit Account</TableHead>
                <TableHead>Credit Account</TableHead>
                <TableHead>Credit Amount</TableHead>
                <TableHead>Narration</TableHead>
                <TableHead>Transaction Reference</TableHead>
                <TableHead>Transaction Status</TableHead>
                <TableHead>Date Posted</TableHead>
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
        {/*<CardContent className="bg-white rounded-b-lg">*/}
        {/*  <div className="space-y-4">*/}
        {/*    {recentTransactions.map((transaction) => (*/}
        {/*      <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-200">*/}
        {/*        <div className="flex items-center space-x-4">*/}
        {/*          <div className={`w-3 h-3 rounded-full ${*/}
        {/*            transaction.type === 'Inward' ? 'bg-gradient-to-r from-emerald-400 to-green-500' : 'bg-gradient-to-r from-rose-400 to-red-500'*/}
        {/*          }`} />*/}
        {/*          <div>*/}
        {/*            <p className="font-medium text-gray-900">{transaction.type}</p>*/}
        {/*            <p className="text-sm text-gray-500">{transaction.date}</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="text-right">*/}
        {/*          <p className="font-medium text-gray-900">{transaction.amount}</p>*/}
        {/*          <p className={`text-sm font-medium ${*/}
        {/*            transaction.status === 'Completed' ? 'text-emerald-600' :*/}
        {/*            transaction.status === 'Pending' ? 'text-amber-600' : 'text-rose-600'*/}
        {/*          }`}>*/}
        {/*            {transaction.status}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</CardContent>*/}
      </Card>

    </div>
  );
};

export default Dashboard;
