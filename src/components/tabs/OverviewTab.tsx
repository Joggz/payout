
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const apiRequestsData = [
  { date: "3 Jun", value: 5 },
  { date: "4 Jun", value: 8 },
  { date: "5 Jun", value: 12 },
  { date: "6 Jun", value: 20 },
  { date: "Today", value: 18 }
];

export const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Try out the new developer experience</h3>
            <p className="text-gray-600">Workbench is the new home for developers to view logs, errors, webhooks, and more.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="text-blue-600 border-blue-600" variant="outline">
              Turn on Workbench →
            </Button>
            <Button variant="ghost" size="sm">✕</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Your integration</span>
        <div className="flex gap-1 ml-auto">
          <Button variant="ghost" size="sm">4h</Button>
          <Button variant="ghost" size="sm">12h</Button>
          <Button variant="ghost" size="sm">24h</Button>
          <Button variant="outline" size="sm">1w</Button>
        </div>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          New
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">API requests</CardTitle>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="text-gray-600">Successful</span>
                <div className="text-2xl font-bold">20</div>
              </div>
              <div>
                <span className="text-gray-600">Failed</span>
                <div className="text-2xl font-bold">0</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={apiRequestsData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">API error distribution</CardTitle>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="text-gray-600">GET</span>
                <div className="text-2xl font-bold">0</div>
              </div>
              <div>
                <span className="text-gray-600">POST</span>
                <div className="text-2xl font-bold">0</div>
              </div>
              <div>
                <span className="text-gray-600">DELETE</span>
                <div className="text-2xl font-bold">0</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center text-gray-400">
              No error data available
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Webhooks</CardTitle>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="text-gray-600">Successful</span>
                <div className="text-2xl font-bold">0</div>
              </div>
              <div>
                <span className="text-gray-600">Failed</span>
                <div className="text-2xl font-bold">0</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center text-gray-400">
              No webhook data available
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Webhooks response time</CardTitle>
            <p className="text-sm text-gray-600">No recent webhook attempts</p>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center text-gray-400">
              No response time data available
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            API version
            <Button variant="ghost" size="sm" className="text-xs">ℹ️</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">2023-10-16</span>
            <Button variant="link" className="text-blue-600 text-sm">
              Upgrade available...
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">Recent errors</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">2</Badge>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="font-medium mb-2">Everything looks good</h3>
            <p className="text-gray-600 text-sm">Come back later for more!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
