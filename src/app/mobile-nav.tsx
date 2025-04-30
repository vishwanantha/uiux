"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import MobileMenu from "./common/mobile-menu"


export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(true)}>
        <Menu className="h-6 w-6" />
      </button>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
