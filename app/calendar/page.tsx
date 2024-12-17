import { CalendarBooking } from "@/components/calendar-booking"

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-4 text-center font-serif text-4xl font-bold">
          Don't Delay Your Application!
        </h1>
        <p className="mb-12 text-center text-gray-600">
          Limited spots available—once filled, we won't be accepting new projects for the next 12 months.
        </p>
        <CalendarBooking />
      </div>
    </div>
  )
}


