
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

export const WebhooksTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-6">Webhook endpoints</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">🌐</span>
                <span className="font-mono text-sm">https://apistage.carssist.org/v1/webhook/stripe</span>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add endpoint
              </Button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>TYPE</TableHead>
                  <TableHead>LAST 7 DAYS</TableHead>
                  <TableHead>ERROR RATE</TableHead>
                  <TableHead>STATUS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Account</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>0%</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle>Amazon EventBridge</CardTitle>
            <Badge variant="secondary">NEW</Badge>
          </div>
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add EventBridge
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              Amazon EventBridge destinations can only be created or managed with Workbench.
            </p>
            <Button variant="link" className="text-blue-600">
              Enable Workbench
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Local listeners</CardTitle>
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add local listener
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Listen to live Stripe events and forward them to your local device using the Stripe CLI.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
