
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, MoreHorizontal } from "lucide-react";

export const ApiKeysTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">API keys</h2>
        </div>
        <Button variant="link" className="text-blue-600">
          Learn more about API authentication →
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Standard keys</CardTitle>
          <CardDescription>
            Create a key that unlocks full API access, enabling extensive interaction with your account. 
            <Button variant="link" className="text-blue-600 p-0 h-auto">Learn more</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>TOKEN</TableHead>
                <TableHead>LAST USED</TableHead>
                <TableHead>CREATED</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Publishable key</TableCell>
                <TableCell className="font-mono text-sm">
                  **********
                  {/*pk_test_51OzijwEg5PIUmrZChAovb4GlWeJ3VrjuQ*/}
                  <br />
                  **********
                  {/*rFJKN0VXSAGNl4AhajV1Sf86THqrb50DFaDRURQGFH*/}
                  <br />
                  ***********
                  {/*BivlF9cfLdcVm00k09Db00U*/}
                </TableCell>
                <TableCell>5 Jun</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">ℹ️</Button>
                  29 Mar 2024
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Secret key</TableCell>
                <TableCell className="font-mono text-sm">
                  *****************
                  {/*sk_test_51OzijwEg5PIUmrZCFCG3hF2cUx4TlPuxb*/}
                  <br />
                  ********
                  {/*AW6m9mbo2PKsDuH8InNUVGU6xO2NBVZyJGn0jCWpR*/}
                  <br />
                  *********
                  {/*LuTYu0pV6IC3B00RqsIyx0*/}
                </TableCell>
                <TableCell>8 Jun</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">ℹ️</Button>
                  29 Mar 2024
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Restricted keys</CardTitle>
            <CardDescription>
              Create a key with specific access limits and permissions for greater security. 
              <Button variant="link" className="text-blue-600 p-0 h-auto">Learn more</Button>
            </CardDescription>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create restricted key
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>TOKEN</TableHead>
                <TableHead>LAST USED</TableHead>
                <TableHead>CREATED</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 py-8">
                  No restricted keys
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
