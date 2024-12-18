import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">DataGPT vs Everyone Else (BI Tools and SQL Wrappers)</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Analysis</TableHead>
              <TableHead>Example</TableHead>
              <TableHead>DataGPT</TableHead>
              <TableHead>SQL wrappers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Descriptive</TableCell>
              <TableCell>What is my revenue this week vs last week?</TableCell>
              <TableCell><Check className="text-green-500" /></TableCell>
              <TableCell><Check className="text-green-500" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Key Driver</TableCell>
              <TableCell>Why did my revenue drop this week?</TableCell>
              <TableCell><Check className="text-green-500" /></TableCell>
              <TableCell><X className="text-red-500" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Anomaly</TableCell>
              <TableCell>Are there any surprises in my revenue metric this month?</TableCell>
              <TableCell><Check className="text-green-500" /></TableCell>
              <TableCell><X className="text-red-500" /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
