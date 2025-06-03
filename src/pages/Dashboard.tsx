
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

  const recentTransactions = [
    { id: 1, type: 'Inward', amount: '$5,200', status: 'Completed', date: '2024-01-15' },
    { id: 2, type: 'Outward', amount: '$3,800', status: 'Pending', date: '2024-01-14' },
    { id: 3, type: 'Inward', amount: '$2,100', status: 'Completed', date: '2024-01-14' },
    { id: 4, type: 'Outward', amount: '$1,500', status: 'Failed', date: '2024-01-13' },
  ];

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
        <CardContent className="bg-white rounded-b-lg">
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    transaction.type === 'Inward' ? 'bg-gradient-to-r from-emerald-400 to-green-500' : 'bg-gradient-to-r from-rose-400 to-red-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{transaction.amount}</p>
                  <p className={`text-sm font-medium ${
                    transaction.status === 'Completed' ? 'text-emerald-600' :
                    transaction.status === 'Pending' ? 'text-amber-600' : 'text-rose-600'
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
