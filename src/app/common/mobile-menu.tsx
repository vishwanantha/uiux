"use client"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="p-2">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-col px-4 py-2">
        <Link href="/" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          Home
        </Link>
        <Link href="/categories" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          Categories
        </Link>
        <Link href="/ir-prime" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          IR Prime
        </Link>
        <Link href="/events" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          Events
        </Link>
        <Link href="/bookstore" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          Bookstore
        </Link>
        <Link href="/newsletter" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          Newsletter
        </Link>
        <Link href="/video" className="py-3 border-b border-gray-100 text-gray-800 font-medium" onClick={onClose}>
          Video
        </Link>
      </nav>
    </div>
  )
}
