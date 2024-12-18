import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-black rounded-lg mb-12 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DataGPT
        </Link>
        {/* <img alt="datagpt logo" width="181" height="40" decoding="async" data-nimg="1"  src="/_next/static/media/datagpt.d5f22744.png"></img> */}
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/company">Company</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost">Sign in</Button>
          <Button className='bg-white text-black'>Schedule a demo</Button>
        </div>
      </div>
    </header>
  )
}

