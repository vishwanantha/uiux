"use client"

import Image from "next/image"
import Link from "next/link"


export default function VideoWall() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-medium">IR Video Wall</h1>
          <Link href="/more" className="text-sm text-gray-200 flex items-center">
            See more <span className="ml-1">›</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured video (larger) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/image29.jpg"
                alt="Reebok opens store at Lulu Mall, Lucknow"
                width={400}
                height={200}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                 
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-sm font-medium">Reebok opens store at Lulu Mall, Lucknow</h3>
          </div>

          {/* Three columns section */}
          <div className="lg:col-span-7">
            {/* Headings row */}
            <div className="grid grid-cols-3 gap-4 mb-2">
              <h2 className="text-base font-medium">Retail With Rasul</h2>
              <h2 className="text-base font-medium">The Store</h2>
              <h2 className="text-base font-medium">IR Studio</h2>
            </div>

            {/* Content rows */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Retail With Rasul - first video */}
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/image30.jpg"
                    alt="Retail Rasul: PM Gati Shakti Week 2023"
                    width={200}
                    height={100}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                      
                    </div>
                  </div>
                </div>
                <h3 className="mt-1 text-xs text-gray-300 line-clamp-2">
                  Retail Rasul: PM Gati Shakti Week 2023 on Infra Dev & Investment
                </h3>
              </div>

              {/* The Store - first video */}
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/a6.svg"
                    alt="Tanishq Group celebrates Rivaah"
                    width={200}
                    height={100}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                
                    </div>
                  </div>
                </div>
                <h3 className="mt-1 text-xs text-gray-300 line-clamp-2">
                  Tanishq Group celebrates Rivaah with its latest innovations
                </h3>
              </div>

              {/* IR Studio - first video */}
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/a6.svg"
                    alt="Zudio Elite launches outlet in Lucknow"
                    width={200}
                    height={100}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                 
                    </div>
                  </div>
                </div>
                <h3 className="mt-1 text-xs text-gray-300 line-clamp-2">Zudio Elite launches outlet in Lucknow</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Retail With Rasul - second video */}
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/a6.svg"
                    alt="Retail Rasul: Garmin & Xiaomi 2023"
                    width={200}
                    height={100}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                     
                    </div>
                  </div>
                </div>
                <h3 className="mt-1 text-xs text-gray-300 line-clamp-2">
                  Retail Rasul: Garmin & Xiaomi 2023 Positioning Strategy and Challenges
                </h3>
              </div>

              {/* The Store - second video */}
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/image27.jpg"
                    alt="Retail Fashion by ABFRL opens 2 stores"
                    width={200}
                    height={100}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                     
                    </div>
                  </div>
                </div>
                <h3 className="mt-1 text-xs text-gray-300 line-clamp-2">
                  Retail Fashion by ABFRL opens 2 stores in Mumbai
                </h3>
              </div>

              {/* IR Studio - second video */}
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/a6.svg"
                    alt="Unboxing the Anchor renovation film"
                    width={200}
                    height={100}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                     
                    </div>
                  </div>
                </div>
                <h3 className="mt-1 text-xs text-gray-300 line-clamp-2">Unboxing the Anchor renovation film</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
