'use client'

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Clock, Video } from 'lucide-react'

export function CalendarBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="grid md:grid-cols-2">
      {/* Profile Section */}
      <div className="border-b p-6 md:border-b-0 md:border-r">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-[#1a1a2e] text-center text-5xl text-white flex items-center justify-center font-serif">
            R
          </div>
        </div>
        <div className="mb-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Luis Barcala"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h2 className="font-medium">Luis Barcala</h2>
          </div>
          <h3 className="text-xl font-bold">Ratio Fellowship</h3>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            30 min
          </div>
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Web conferencing details provided upon confirmation.
          </div>
          <p>
            We build a predictable, profitable and scalable customer acquisition system for your SaaS
          </p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Select a Date & Time</h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mb-4"
          components={{
            IconLeft: () => <ChevronLeft className="h-4 w-4" />,
            IconRight: () => <ChevronRight className="h-4 w-4" />,
          }}
        />
        <div className="space-y-4">
          <h4 className="font-medium">Time zone</h4>
          <Select defaultValue="IST">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IST">India Standard Time (11:00am)</SelectItem>
              <SelectItem value="PST">Pacific Time (US & Canada)</SelectItem>
              <SelectItem value="EST">Eastern Time (US & Canada)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  )
}

