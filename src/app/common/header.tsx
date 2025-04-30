import Image from "next/image"
import Link from "next/link"
import { Search, Menu } from "lucide-react"

export default function Home() {
  return (
    <main >
      {/* Apple Music Banner */}
      <div className="w-full p-0">
        <Image
          src="/imageiq.png"
          alt="Apple Music - Millions of songs. One month on us."
          width={1000}
          height={250}
          className="w-[60%] h-auto ml-[220px]"
          priority
        />
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="relative">
  <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
  <input
    type="text"
    placeholder="Search here..."
    className="pl-8 pr-2 py-1 text-sm bg-transparent border-none outline-none focus:ring-0"
  />
</div>

        <Link href="/" className="mx-auto">
          <Image
            src="/indiaretail.png"
            alt="IndiaRetailing.com"
            width={250}
            height={20}
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <button className="bg-red-600 text-white px-4 py-2 text-sm font-medium rounded hover:bg-red-700 transition-colors">
            SUBSCRIBE
          </button>
          <button className="text-gray-800 text-sm font-medium hover:text-red-600 transition-colors">SIGN IN</button>
        </div>
      </div>

     

            {/* Navigation Bar */}
<div className="border-t border-b border-gray-200">
  <div className="container mx-auto px-4">
    {/* First Row - Main Navigation */}
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button className="p-4">
          <Menu className="h-6 w-6" />
        </button>

        <nav className="hidden md:flex ml-[100px] items-center space-x-8">
          <Link href="/" className="py-4 text-red-600 font-medium hover:text-red-700 transition-colors">
            Home
          </Link>
          <Link
            href="/categories"
            className="py-4 text-gray-800 font-medium hover:text-red-600 transition-colors"
          >
            Categories
          </Link>
          <Link href="/ir-prime" className="py-4 text-gray-800 font-medium hover:text-red-600 transition-colors">
            IR Prime
          </Link>
          <Link href="/events" className="py-4 text-gray-800 font-medium hover:text-red-600 transition-colors">
            Events
          </Link>
          <Link href="/bookstore" className="py-4 text-gray-800 font-medium hover:text-red-600 transition-colors">
            Bookstore
          </Link>
          <Link
            href="/newsletter"
            className="py-4 text-gray-800 font-medium hover:text-red-600 transition-colors"
          >
            Newsletter
          </Link>
          <Link href="/video" className="py-4 text-gray-800 font-medium hover:text-red-600 transition-colors">
            Video
          </Link>
          <div className="flex  ml-[80px] text-sm text-gray-600">
              <span>Friday, 30 June 2023</span>
            </div>
        </nav>
      </div>
    </div>
    
    {/* Second Row - Secondary Links */}
    <div className="hidden md:flex items-center ml-[100px] gap-2 text-sm font-medium py-2 overflow-x-auto">
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Fashion & Lifestyle
      </Link>
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Beauty & Wellness
      </Link>
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Food & Beverage
      </Link>
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Consumer Durables & IT
      </Link>
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Entertainment
      </Link>
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Home Decor & Furnishing
      </Link>
      <span className="text-gray-300">•</span>
      <Link href="#" className="text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      Specialty Retail
      </Link>
    
    </div>
 
      
              

           
          </div>
       </div>

    </main>
  )
}