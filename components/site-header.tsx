import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full py-4">
      <div className="container">
        <div className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl bg-white/80 px-8 py-4 shadow-sm backdrop-blur">
          <div className="flex-1" />
          <div className="text-center text-2xl">
            <span className="font-serif font-bold text-[#1a1a2e]">Ratio</span>{" "}
            <span className="font-serif text-gray-400">Fellowship</span>
          </div>
          <div className="flex flex-1 justify-end">
            <Button 
              asChild
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-8"
            >
              <Link href="/calendar">Let's talk →</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

