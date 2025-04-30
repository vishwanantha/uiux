"use client"
import Image from "next/image"
import Link from "next/link"

export default function ReconnectGrid() {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Reconnect</h2>
        <Link href="#" className="text-sm text-gray-500 flex items-center">
          See more
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {[
          {
            title: "Arvind Fashions' data-driven digital transformation",
            description:
              "The brand is on its way to becoming more powerful in India by supercharging its omni-channel...",
            image: "/image13.svg",
          },
          {
            title: "US denim brand Lee opens outlets in Sikar, Panna",
            description:
              "Lee and Wrangler have opened two new stores in Sikar, Panna...",
            image: "/image13.svg",
          },
          {
            title: "Arvind Fashions' data-driven digital transformation",
            description:
              "The brand is on its way to becoming more powerful in India by supercharging its omni-channel...",
            image: "/image13.svg",
          },
          {
            title: "US denim brand Lee opens outlets in Sikar, Panna",
            description:
              "Lee and Wrangler have opened two new stores in Sikar, Panna...",
            image: "/image13.svg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md hover:bg-gray-50 transition-colors border border-gray-100 overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-2">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Advertisement */}
        <div className="col-span-1 md:col-span-1 flex flex-col justify-end">
          <div className="text-xs text-center text-gray-500 mb-1">— Advertisement —</div>
          <Image
            src="/image13.svg"
            alt="Advertisement"
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
