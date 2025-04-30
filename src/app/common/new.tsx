import Image from "next/image"
import Link from "next/link"

export default function NewsGrid() {
  const sections = [
    {
      title: "E-Commerce",
      articles: [
        {
          image: "/image6.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "Why retailers can't afford to ignore composable",
          description: "Composable commerce opens new avenues for brands to thrive...",
        },
        {
          image: "/image7.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "ONDC has completely automated grievance resolution",
          description: "ONDC is also working on online resolution mechanism apart...",
        },
        {
          image: "/image8.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "Shiprocket seller app integrates with ONDC",
          description: "Shiprocket plans to enable the buy categories on ONDC...",
        },
      ],
    },
    {
      title: "People",
      articles: [
        {
          image: "/image10.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "Fashion brand iconic Shalheen Chairman of Al Ansari Fashions",
          description: "IndiaRetailing brings you a series in which we highlight...",
        },
        {
          image: "/image11.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "Zuck marries heritage with functionality",
          description: "IndiaRetailing brings you a series in which we highlight...",
        },
        {
          image: "/image12.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "FNP (Ferns N Petals) appoints Ashish Goel as...",
          description: "Goel will spearhead the company's technological...",
        },
      ],
    },
    {
      title: "D2C Remove Buzz",
      articles: [
        {
          image: "/image13.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "The D2C growth story",
          description: "According to reports in Q1 2022, Indian D2C startups...",
        },
        {
          image: "/image14.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "D2C brand Kapiva onboards Mira Kapoor as brand ambassador",
          description: "The campaign has been spotted in the hybrid garment...",
        },
        {
          image: "/image15.jpg",
          tag: "FASHION",
          section: "TAYLOR SWIFT",
          title: "India D2C Summit & Awards 2023 Honours...",
          description: "House of Chikankari, Plum Goodness, Aqualens brands...",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">{section.title}</h2>
              <Link href="#" className="text-sm text-gray-500 flex items-center">
                See more <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="space-y-4">
              {section.articles.map((item, j) => (
                <div key={j} className="flex border border-gray-100 rounded-md overflow-hidden shadow-sm h-[100px]">
                  {/* Image Left */}
                  <div className="w-[35%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Right */}
                  <div className="w-[65%] p-3 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-red-600">
                        {item.tag} <span className="text-gray-500">|</span> {item.section}
                      </div>
                      <Link href="#" className="block mt-1">
                        <h3 className="font-medium text-xs leading-snug">{item.title}</h3>
                      </Link>
                    </div>
                    <p className="text-[10px] text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="text-[10px] text-gray-400 mt-1">#{item.tag.toLowerCase()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
