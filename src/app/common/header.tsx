"use client"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    "Fashion & Lifestyle",
    "Beauty & Wellness",
    "Food & Beverage",
    "Consumer Durables & IT",
    "Entertainment",
    "Home Decor & Furnishing",
    "Specialty Retail",
  ]

  const navItems = [
    { name: "Home", path: "/", active: true },
    { name: "Categories", path: "/categories" },
    { name: "IR Prime", path: "/prime" },
    { name: "Events", path: "/events" },
    { name: "Bookstore", path: "/bookstore" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Video", path: "/video" },
  ]

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
  
    year: "numeric",
  })

  return (
    <header className="w-full">
      {/* Apple Music Banner */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[120px]">
            <Image src="/Rectangle.svg" alt="Apple Music promotion" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Logo and Search Bar */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border rounded-md px-3 py-1 w-[500px]">
     
            <input type="text" placeholder="Search here" className="ml-2 outline-none text-sm w-full " />
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/Group.svg"
                alt="IndiaRetailing.com"
                width={200}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Subscribe and Sign In */}
          <div className="flex items-center gap-2">
            <button className="bg-[#E21B22] hover:bg-red-700 text-white text-xs px-4 py-1 h-8 rounded">
              Subscribe
            </button>
            <button  className="text-xs px-4 py-1 h-8 border-gray-300">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <nav className="flex-1">
              <ul className="flex items-center">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        item.active ? "text-[#E21B22]" : "text-gray-800 hover:text-[#E21B22]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="px-4 text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center overflow-x-auto whitespace-nowrap py-2 px-4 scrollbar-hide">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center">
                {index !== 0 && <span className="text-gray-300 mx-2">|</span>}
                <Link
                  href={`/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                  className="text-xs text-gray-700 hover:text-[#E21B22] transition-colors whitespace-nowrap"
                >
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
