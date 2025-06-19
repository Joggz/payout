
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {downloadReport} from "@/services/utilites/config.ts";

const OutwardReports = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleDownload = async (format: 'pdf' | 'csv') => {
    if (!dateFrom || !dateTo) {
      toast({
        title: "Missing Date Range",
        description: "Please select both from and to dates",
        variant: "destructive",
      });
      return;
    }
    const payload = {
      format: format,
      filter: {},
      endpoint: '/download/outward_report',
    }

    toast({
      title: "Download Started",
      description: `Downloading ${format.toUpperCase()} report for ${dateFrom} to ${dateTo}`,
    });
    const downloadInProgress = await downloadReport(payload);

    if (downloadInProgress  === true) {
      toast({
        title: "Download Completed",
        description: `Downloading ${format.toUpperCase()} report for ${dateFrom} to ${dateTo}`,
      });
    }else {
      toast({
        title: "Download Failed",
        description: `Download for  ${format.toUpperCase()} report for ${dateFrom} to ${dateTo} failed`,
      });
    }

  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">Outward Reports</h1>
        <p className="text-gray-600 mt-2">Download comprehensive reports for outward transactions</p>
      </div>

      {/* Date Range Selection */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="flex items-center text-gray-800">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            Select Date Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 bg-white rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dateFrom" className="text-gray-700 font-medium">From Date</Label>
              <Input
                id="dateFrom"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="mt-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="dateTo" className="text-gray-700 font-medium">To Date</Label>
              <Input
                id="dateTo"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="mt-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => handleDownload('pdf')} className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white shadow-lg">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Report
            </Button>
            <Button onClick={() => handleDownload('csv')} variant="outline" className="flex-1 border-2 border-rose-200 text-rose-600 hover:bg-rose-50">
              <Download className="h-4 w-4 mr-2" />
              Download CSV Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Summary */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
          <CardTitle className="text-gray-800">Report Summary</CardTitle>
        </CardHeader>
        <CardContent className="bg-white rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">189</div>
              <div className="text-sm text-blue-700 font-medium mt-1">Total Transactions</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-red-100 rounded-xl border border-rose-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">$89,420</div>
              <div className="text-sm text-rose-700 font-medium mt-1">Total Amount</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">$473</div>
              <div className="text-sm text-purple-700 font-medium mt-1">Average Transaction</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OutwardReports;
