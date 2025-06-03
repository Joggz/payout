
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Inward',
      value: '$124,580',
      change: '+12.5%',
      icon: ArrowDownLeft,
      color: 'text-green-600'
    },
    {
      title: 'Total Outward',
      value: '$89,420',
      change: '+8.2%',
      icon: ArrowUpRight,
      color: 'text-red-600'
    },
    {
      title: 'Net Balance',
      value: '$35,160',
      change: '+4.3%',
      icon: DollarSign,
      color: 'text-blue-600'
    },
    {
      title: 'Growth',
      value: '23.5%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  const recentTransactions = [
    { id: 1, type: 'Inward', amount: '$5,200', status: 'Completed', date: '2024-01-15' },
    { id: 2, type: 'Outward', amount: '$3,800', status: 'Pending', date: '2024-01-14' },
    { id: 3, type: 'Inward', amount: '$2,100', status: 'Completed', date: '2024-01-14' },
    { id: 4, type: 'Outward', amount: '$1,500', status: 'Failed', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your account activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.type === 'Inward' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <p className="font-medium">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p className={`text-sm ${
                    transaction.status === 'Completed' ? 'text-green-600' :
                    transaction.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
