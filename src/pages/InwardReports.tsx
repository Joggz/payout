
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {downloadReport} from '@/services/utilites/config.ts'

const InwardReports = () => {
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
      endpoint: '/download/inward_report',
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

  // 08135400689
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Inward Reports</h1>
        <p className="text-gray-600 mt-2">Download comprehensive reports for inward transactions</p>
      </div>

      {/* Date Range Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Select Date Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dateFrom">From Date</Label>
              <Input
                id="dateFrom"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="dateTo">To Date</Label>
              <Input
                id="dateTo"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => handleDownload('pdf')} className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Report
            </Button>
            <Button onClick={() => handleDownload('csv')} variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download CSV Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Report Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">245</div>
              <div className="text-sm text-blue-600">Total Transactions</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$124,580</div>
              <div className="text-sm text-green-600">Total Amount</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">$508</div>
              <div className="text-sm text-purple-600">Average Transaction</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InwardReports;
