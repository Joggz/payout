
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Filter } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const events = [
  {
    id: "evt_1RXtpvEg5PIUmrZC1dJ6NCvS",
    event: "Your balance has new available transactions",
    date: "09/06/2025, 00:45:15"
  },
  {
    id: "evt_1RXXotEg5PIUmrZCZDHFJFt3",
    event: "A payout of US$204.64 was completed",
    date: "08/06/2025, 01:14:43"
  },
  {
    id: "evt_1RXXosEg5PIUmrZCSbxvrV6Z",
    event: "A payout of US$204.64 has its reconciliation report ready",
    date: "08/06/2025, 01:14:42"
  },
  {
    id: "evt_1RXXosEg5PIUmrZCF1AXkxMa",
    event: "A payout for US$204.64 was initiated and will be completed on 9 Jun",
    date: "08/06/2025, 01:14:42"
  },
  {
    id: "evt_1RXWlxEg5PIUmrZCzPbiirMg",
    event: "Your balance has new available transactions",
    date: "08/06/2025, 00:07:37"
  }
];

export const EventsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">🧪 Try Workbench</Button>
          <span className="text-sm text-gray-600">View events and filter by time, resource, or type to understand your activity all in one place.</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-blue-600">Learn more</Button>
          <Button variant="ghost" size="sm">✕</Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>EVENT</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEvents.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.event}</TableCell>
              <TableCell className="font-mono text-sm">{event.id}</TableCell>
              <TableCell>{event.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
    </div>
  );
};
