// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Check, X } from 'lucide-react'

// export default function Comparison() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold mb-8">DataGPT vs Everyone Else (BI Tools and SQL Wrappers)</h2>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Analysis</TableHead>
//               <TableHead>Example</TableHead>
//               <TableHead>DataGPT</TableHead>
//               <TableHead>SQL wrappers</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             <TableRow>
//               <TableCell>Descriptive</TableCell>
//               <TableCell>What is my revenue this week vs last week?</TableCell>
//               <TableCell><Check className="text-green-500" /></TableCell>
//               <TableCell><Check className="text-green-500" /></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Key Driver</TableCell>
//               <TableCell>Why did my revenue drop this week?</TableCell>
//               <TableCell><Check className="text-green-500" /></TableCell>
//               <TableCell><X className="text-red-500" /></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Anomaly</TableCell>
//               <TableCell>Are there any surprises in my revenue metric this month?</TableCell>
//               <TableCell><Check className="text-green-500" /></TableCell>
//               <TableCell><X className="text-red-500" /></TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//     </section>
//   )
// }
import { Check, X } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const features = [
  {
    type: "Anomaly",
    description: "Are there any surprises in my revenue metric this month?",
  },
  {
    type: "Trend",
    description: "Are there any notable trends in our revenue this month?",
  },
  {
    type: "Correlations",
    description: "What is the correlation between revenue and bounces?",
  },
  {
    type: "Adjust for seasonality",
    description: "Is this conversion rate normal for this time of year?",
  },
]

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white shadow-lg p-12">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl  mb-8">DataGPT vs Everyone Else (BI Tools and SQL Wrappers)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Analysis Type</TableHead>
                <TableHead className="w-[400px]">Example</TableHead>
                <TableHead className="w-[100px]">DataGPT</TableHead>
                <TableHead className="w-[100px]">SQL Wrappers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.type}>
                  <TableCell className="font-medium">{feature.type}</TableCell>
                  <TableCell>{feature.description}</TableCell>
                  <TableCell>
                    <Check className="h-5 w-5 text-green-500" />
                  </TableCell>
                  <TableCell>
                    <X className="h-5 w-5 text-red-500" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}


