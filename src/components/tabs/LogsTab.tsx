import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Copy } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface LogEntry {
  id: string;
  status: string;
  method: string;
  endpoint: string;
  time: string;
  fullTime: string;
  ipAddress: string;
  apiVersion: string;
  source: string;
  idempotencyKey: string;
  responseBody: string;
  isHighlighted: boolean;
}

const logEntries: LogEntry[] = [
  {
    id: "req_m6MUMUjSEr9E9f",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/payment_intents",
    time: "21:59:15",
    fullTime: "05/06/2025, 21:59:15",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340066_UDOCbQ",
    responseBody: `{
  "id": "pi_3RWlodEg5PIUmrZC014k3cdu",
  "object": "payment_intent",
  "amount": 2000,
  "currency": "usd",
  "status": "requires_payment_method"
}`,
    isHighlighted: true
  },
  {
    id: "req_m6MUMUjSEr9E8g",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/payment_intents",
    time: "21:49:25",
    fullTime: "05/06/2025, 21:49:25",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340067_UDOCbR",
    responseBody: `{
  "id": "pi_3RWlodEg5PIUmrZC014k3cde",
  "object": "payment_intent",
  "amount": 1500,
  "currency": "usd"
}`,
    isHighlighted: false
  },
  {
    id: "req_m6MUMUjSEr9E7h",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/payment_intents",
    time: "21:48:53",
    fullTime: "05/06/2025, 21:48:53",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340068_UDOCbS",
    responseBody: `{
  "id": "pi_3RWlodEg5PIUmrZC014k3cdf",
  "object": "payment_intent"
}`,
    isHighlighted: false
  },
  {
    id: "req_m6MUMUjSEr9E6i",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/customers/cus_SRdj2CqM3LlSnv",
    time: "20:56:26",
    fullTime: "05/06/2025, 20:56:26",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340069_UDOCbT",
    responseBody: `{
  "id": "cus_SRdj2CqM3LlSnv",
  "object": "customer",
  "email": "customer@example.com"
}`,
    isHighlighted: false
  },
  {
    id: "req_m6MUMUjSEr9E5j",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/payment_methods/pm_1RWkppEg5PIUmrZCQg9H...",
    time: "20:56:26",
    fullTime: "05/06/2025, 20:56:26",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340070_UDOCbU",
    responseBody: `{
  "id": "pm_1RWkppEg5PIUmrZCQg9H",
  "object": "payment_method",
  "type": "card"
}`,
    isHighlighted: false
  },
  {
    id: "req_m6MUMUjSEr9E4k",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/payment_methods",
    time: "20:56:25",
    fullTime: "05/06/2025, 20:56:25",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340071_UDOCbV",
    responseBody: `{
  "id": "pm_1RWkppEg5PIUmrZCQg9I",
  "object": "payment_method"
}`,
    isHighlighted: false
  },
  {
    id: "req_m6MUMUjSEr9E3l",
    status: "402 ERR",
    method: "POST",
    endpoint: "/v1/payment_methods/pm_1RWkTsEg5PIUmrZCa6cr...",
    time: "20:33:45",
    fullTime: "05/06/2025, 20:33:45",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340072_UDOCbW",
    responseBody: `{
  "error": {
    "type": "card_error",
    "code": "card_declined",
    "message": "Your card was declined."
  }
}`,
    isHighlighted: false
  },
  {
    id: "req_m6MUMUjSEr9E2m",
    status: "200 OK",
    method: "POST",
    endpoint: "/v1/payment_methods",
    time: "20:33:44",
    fullTime: "05/06/2025, 20:33:44",
    ipAddress: "137.184.201.250",
    apiVersion: "2025-05-28.basil",
    source: "Stripe/v1 GoBindings/82.2.0",
    idempotencyKey: "17491607557475340073_UDOCbX",
    responseBody: `{
  "id": "pm_1RWkppEg5PIUmrZCQg9J",
  "object": "payment_method"
}`,
    isHighlighted: false
  }
];

export const LogsTab = () => {
  const [selectedLogId, setSelectedLogId] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 5;

  const totalPages = Math.ceil(logEntries.length / logsPerPage);
  const startIndex = (currentPage - 1) * logsPerPage;
  const endIndex = startIndex + logsPerPage;
  const currentLogs = logEntries.slice(startIndex, endIndex);

  const handleLogClick = (logId: string) => {
    setSelectedLogId(logId);
    setIsSheetOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const selectedLog = logEntries.find(log => log.id === selectedLogId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">🧪 Try Workbench</Button>
          <span className="text-sm text-gray-600">View logs and filter by time, resource, or status to understand your activity all in one place.</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-blue-600">Learn more</Button>
          <Button variant="ghost" size="sm">✕</Button>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm">All</Button>
        <Button variant="ghost" size="sm">Succeeded</Button>
        <Button variant="ghost" size="sm">Failed</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Filter by resource ID..." className="pl-10 w-64" />
        </div>
        <Select defaultValue="date">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="status">Status</SelectItem>
            <SelectItem value="method">Method</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm">Status</Button>
        <Button variant="outline" size="sm">✓ Method</Button>
        <Button variant="outline" size="sm">API endpoint</Button>
        <Button variant="outline" size="sm">✓ More...</Button>
        <Button variant="link" className="text-blue-600 ml-auto">Clear all</Button>
      </div>

      <div className="border rounded-lg">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium">5 JUN 2025</h3>
        </div>
        
        <Table>
          <TableBody>
            {currentLogs.map((log) => (
              <TableRow 
                key={log.id}
                className={`cursor-pointer hover:bg-gray-50 transition-colors ${
                  log.isHighlighted ? 'border-l-4 border-l-blue-500' : ''
                } ${selectedLogId === log.id ? 'bg-blue-50' : ''}`}
                onClick={() => handleLogClick(log.id)}
              >
                <TableCell>
                  <Badge 
                    variant={log.status.includes('ERR') ? 'destructive' : 'secondary'} 
                    className={log.status.includes('ERR') ? '' : 'bg-green-100 text-green-800'}
                  >
                    {log.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{log.method}</TableCell>
                <TableCell className="font-mono text-sm">{log.endpoint}</TableCell>
                <TableCell className="text-sm">{log.time}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) handlePageChange(currentPage + 1);
              }}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[600px] sm:w-[600px]">
          {selectedLog && (
            <>
              <SheetHeader>
                <SheetTitle className="text-lg flex items-center gap-2">
                  {selectedLog.method} {selectedLog.endpoint}
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-600">Status</span>
                      <div className="font-mono">{selectedLog.status}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">ID</span>
                      <div className="font-mono flex items-center gap-2">
                        {selectedLog.id}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => navigator.clipboard.writeText(selectedLog.id)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Time</span>
                      <div>{selectedLog.fullTime}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">IP address</span>
                      <div>{selectedLog.ipAddress}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">API Version</span>
                      <div className="text-blue-600">{selectedLog.apiVersion}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Source</span>
                      <div>{selectedLog.source}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Idempotency</span>
                      <div className="font-mono">Key — {selectedLog.idempotencyKey}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Response body</h4>
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm max-h-80 overflow-auto">
                      <pre className="whitespace-pre-wrap">{selectedLog.responseBody}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};
