import Image from "next/image"
import Link from "next/link"

export default function NewsGrid() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* E-Commerce Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">E-Commerce</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">Why retailers can't afford to ignore composable</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="E-commerce article"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">Composable commerce opens new avenues for brands to thrive...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">ONDC has completely automated grievance resolution</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="ONDC article"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">ONDC is also working on online resolution mechanism apart...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">Shiprocket seller app integrates with ONDC</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="Shiprocket article"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">Shiprocket plans to enable the buy categories on ONDC...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>
          </div>
        </div>

        {/* People Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">People</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">Fashion brand iconic Shalheen Chairman of Al Ansari Fashions</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="Fashion maven"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">IndiaRetailing brings you a series in which we highlight...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">Zuck marries heritage with functionality</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="Zuck article"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">IndiaRetailing brings you a series in which we highlight...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">FNP (Ferns N Petals) appoints Ashish Goel as...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="FNP article"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">Goel will spearhead the company's technological...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>
          </div>
        </div>

        {/* D2C Remove Buzz Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">D2C Remove Buzz</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">The D2C growth story</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="D2C growth"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">According to reports in Q1 2022, Indian D2C startups...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">D2C brand Kapiva onboards Mira Kapoor as brand ambassador</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="Kapiva article"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">The campaign has been spotted in the hybrid garment...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">India D2C Summit & Awards 2023 Honours...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a7.svg"
                  alt="D2C Summit"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">House of Chikankari, Plum Goodness, Aqualens brands...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
