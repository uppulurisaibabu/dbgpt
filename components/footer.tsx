import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    product: ['How it works', 'Easy setup', 'Security'],
    solutions: [
      'Technology',
      'Fintech',
      'Gaming',
      'E-commerce',
      'Media & Entertainment',
      'Travel & Hospitality',
      'Airlines',
      'Product & UX',
      'Marketing',
      'Customer Service'
    ],
    resources: ['Blog', 'Case Studies'],
    company: ['About', 'Careers', 'Culture', 'Contact us']
  }

  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/placeholder.svg"
              alt="DataGPT"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-sm mb-6">
              DataGPT is a product developed and owned by Comparative, Inc.
            </p>
            <div className="space-y-4">
              <h3 className="text-white mb-4">Accelerators</h3>
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Microsoft"
                  width={120}
                  height={40}
                  className="opacity-70"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Google"
                  width={120}
                  height={40}
                  className="opacity-70"
                />
                <Image
                  src="/placeholder.svg"
                  alt="NVIDIA"
                  width={120}
                  height={40}
                  className="opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:col-span-3">
            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link}>
                    <Link href="/" className="hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Solutions</h3>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link}>
                    <Link href="/" className="hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <Link href="/" className="hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <Link href="/" className="hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certificates */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Certificates</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg"
                alt="GDPR"
                width={60}
                height={60}
              />
              <Image
                src="/placeholder.svg"
                alt="SOC2"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap gap-4 text-sm">
          <span>© 2024 Comparative</span>
          <Link href="/" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            DPA
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Vulnerability Disclosure Program
          </Link>
        </div>
      </div>
    </footer>
  )
}

