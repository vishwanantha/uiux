import Image from "next/image";
import Link from "next/link";
import Header from "./common/header";

import VideoWall from "./common/video";
import NewsGrid from "./common/new";

export default function Home() {
  const featuredArticles = [
    {
      id: 1,
      image: "/a2.svg",
      tag: "HOTSPOTS",
      title: "Luxury hotspots: 5 most expensive high streets in the...",
      link: "/article/luxury-hotspots",
    },
    {
      id: 2,
      image: "/a3.svg",
      tag: "AI",
      title: "5 ways to leverage the power of ChatGPT in retail",
      link: "/article/chatgpt-retail",
    },
    {
      id: 3,
      image: "/image43.svg",
      tag: "SHIPPING",
      title: "Reliance to open 250 Azorte stores in 2-3 years",
      link: "/article/reliance-azorte",
    },
  ]
  return (
    <div className="font-sans max-w-6xl mx-auto p-5 text-gray-800">
    
  <div><Header/></div>
<div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Featured Articles */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link
                href={article.link}
                key={article.id}
                className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#E21B22]">{article.tag}</span>
                  <h3 className="text-base font-medium mt-1 group-hover:text-[#E21B22] transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
  

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            <Link href="/article/rahul-gandhi-manipur" className="group bg-white rounded-md overflow-hidden shadow-sm mb-6 block hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/imag2.png"
                  alt="Rahul Gandhi In Manipur"
                  width={800}
                  height={400}
                  className="w-full h-auto group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 mb-2">IN FOCUS</span>
                  <h2 className="text-white text-xl md:text-2xl font-bold group-hover:underline">
                    Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
                  </h2>
                  <p className="text-white/80 text-sm mt-2">Rahul Gandhi</p>
                </div>
              </div>
            </Link>

            {/* News Items */}
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  image: "/image34.svg",
                  tag: "SELECT CITYWALL",
                  title: "Wow! Momo Foods enters Bhopal with Wow!",
                  tags: ["Citywall", "real stories podcast"],
                  link: "/article/wow-momo-bhopal"
                },
                {
                  id: 2,
                  image: "/a8.svg",
                  tag: "FOOD & BEVERAGE",
                  title: "KFC opens another outlet in Punjab",
                  tags: ["Beverage", "real stories podcast"],
                  link: "/article/kfc-punjab"
                },
                {
                  id: 3,
                  image: "/image342.svg",
                  tag: "Select Citywalk",
                  title: "FNP (Ferns N Petals) appoints Ashish Goel",
                  tags: ["Citywalk", "real stories podcast"],
                  link: "/article/fnp-ashish-goel"
                }
              ].map((item) => (
                <Link 
                  href={item.link} 
                  key={item.id} 
                  className="bg-white rounded-md overflow-hidden shadow-sm p-4 flex items-center hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-md group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-red-600">{item.tag}</span>
                    <h3 className="text-base font-medium group-hover:text-red-600 transition-colors">{item.title}</h3>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="mr-2 hover:text-gray-700 transition-colors">#{tag}</span>
                      ))}
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Latest News */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md overflow-hidden shadow-sm p-4 mb-6 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-bold mb-4">Latest News</h2>

              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    image: "/a6.svg",
                    title: "Unwrapping the Archies' reinvention plan",
                    link: "/article/archies-reinvention"
                  },
                  {
                    id: 2,
                    image: "/a7.svg",
                    title: "How AI is enhancing stores, How AI is enhancing stores",
                    link: "/article/ai-enhancing-stores"
                  },
                  {
                    id: 3,
                    title: "Croma opens 58 outlets in 6, Croma retails more than 16,000",
                    link: "/article/croma-outlets"
                  },
                  {
                    id: 4,
                    text: "These companies created a lot of hype when they listed on the...",
                    link: "/article/companies-hype"
                  },
                  {
                    id: 5,
                    title: "Select Citywalk opens 4 new stores in June",
                    link: "/article/citywalk-stores"
                  },
                  {
                    id: 6,
                    text: "These companies created a lot of hype when they listed on the...",
                    link: "/article/companies-hype-2"
                  }
                ].map((item) => (
                  <Link 
                    href={item.link} 
                    key={item.id} 
                    className={`block pb-4 ${item.id !== 6 ? 'border-b border-gray-100' : ''} group`}
                  >
                    {item.image && (
                      <div className="relative h-40 rounded-md overflow-hidden mb-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:opacity-90 transition-opacity"
                        />
                      </div>
                    )}
                    {item.title && (
                      <h3 className="text-base font-medium group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                    )}
                    {item.text && (
                      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                        {item.text}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        {/* Web Specials */}
        <section className="mb-8 bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold">Web Specials</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {/* Featured Image */}
            <Link href="/article/rahul-gandhi-manipur" className="lg:col-span-1 group">
              <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
                <Image
                  src="/imag2.png"
                  alt="Rahul Gandhi In Manipur"
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-sm font-medium group-hover:underline">
                    Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
                  </h3>
                </div>
              </div>
            </Link>

            {/* Bullet Points */}
            <div className="lg:col-span-1">
              <ul className="space-y-3">
                {[
                  "Cinema industry welcomes lowering GST rates",
                  "Patanjali Ayurved to sell 7% stake in Patanjali",
                  "Select Citypark opens 4 new stores in June",
                  "Govt proposes import restrictions on certain gold",
                  "Joom Marketplace offers a global window for sellers"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-red-600 mr-2">•</span>
                    <Link 
                      href={`/article/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="text-sm hover:text-red-600 transition-colors flex-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advertisement */}
            <div className="lg:col-span-1 group">
              <div className="relative h-48 md:h-64 rounded-md overflow-hidden bg-orange-100 hover:shadow-md transition-shadow">
                <Image
                  src="/image41.svg"
                  alt="Advertisement"
                  fill
                  className="object-contain group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-2 py-1">
                  Advertisement
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 mb-1 inline-block">
                    OLA ELECTRIC
                  </div>
                  <h3 className="text-orange-800 text-sm font-bold">SCOOTER</h3>
                  <p className="text-orange-800 text-xs">AT PRICE RANGE OF ₹125,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace News */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              {
                image: "/a9.svg",
                title: "B2R managed marketplace",
                subtitle: "The Yarn",
                link: "/marketplace/b2r"
              },
              {
                image: "/a10.svg",
                title: "Sequoia Capital exits",
                subtitle: "Go Fashion",
                link: "/marketplace/sequoia"
              },
              {
                image: "/a12.svg",
                title: "B2R managed marketplace",
                subtitle: "The Yarn",
                link: "/marketplace/b2r-2"
              },
              {
                image: "/image13.svg",
                title: "Sequoia Capital exits",
                subtitle: "Go Fashion",
                link: "/marketplace/sequoia-2"
              },
              {
                image: "/image14.svg",
                title: "Fashion brands open",
                subtitle: "Shopfest",
                link: "/marketplace/fashion-brands",
                hiddenOnMobile: true
              }
            ].map((item, index) => (
              <Link 
                href={item.link} 
                key={index} 
                className={`bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow ${item.hiddenOnMobile ? 'hidden lg:block' : ''}`}
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs">
                    <span className="font-medium hover:text-red-600 transition-colors">{item.title}</span> {item.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="mb-8">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-bold">Trending</h2>
  </div>
  <div className="flex flex-wrap gap-2">
    {[
      "Zara Opened in Mumbai",
      "Meta",
      "E-Commerce",
      "FoodTech",
      "Live Cricket Score",
      "Adani-Ambani",
      "Gautam Singh Resignation Case",
      "Myntra Launches",
      "E-Commerce",
      "Live Cricket Score"
    ].map((topic, index) => (
      <Link
        key={index}
        href={`/trending/${topic.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block px-3 py-1.5 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-red-200 hover:bg-red-50"
      >
        <span className="text-xs text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">
          {topic}
        </span>
      </Link>
    ))}
  </div>
</section>
        {/* Fashion News */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                image: "/a15.png",
                title: "Fashion brands open, Mumbai Centrepoint of Arrival Fashions",
                link: "/fashion/arrival-fashions"
              },
              {
                image: "/image23.svg",
                title: "DLF creating new retail space in Delhi for France's Galeries Lafayette",
                link: "/fashion/dlf-retail",
                badge: "NEW"
              },
              {
                image: "/image 24.png",
                title: "H&M Loyalty affiliate cards, Cashly through its special purpose",
                link: "/fashion/hm-loyalty"
              },
              {
                image: "/a16.svg",
                title: "How AI is enhancing stores, How AI is enhancing stores",
                link: "/fashion/ai-stores"
              },
              {
                image: "/image 33.svg",
                title: "Relax Retail's Global Footfall, Entertainment in at Rs 120 crore",
                link: "/fashion/relax-retail",
                hiddenOnMobile: true
              }
            ].map((item, index) => (
              <Link 
                href={item.link} 
                key={index} 
                className={`bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow ${item.hiddenOnMobile ? 'hidden lg:block' : ''}`}
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                  />
                  {item.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs rounded-full h-8 w-8 flex items-center justify-center">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium hover:text-red-600 transition-colors">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

     
        {/* Fashion News */}

<VideoWall/>
     
  
    <div className="flex flex-col min-h-screen">
 
     

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Top Banner */}
          <div className="mb-2 mt-0 ml-30">
            <Image
              src="/image1.svg"
              alt="GUESS Watches"
              width={700}
              height={150}
              className=" h-auto rounded-md"
            />
          </div>

          {/* Fashion & Lifestyle Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Fashion & Lifestyle</h2>
              <Link href="/fashion-lifestyle" className="text-sm text-gray-500 flex items-center">
                See more 
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image 14.png"
                  alt="Fashion article"
                  width={200}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-red-500">FASHION</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">FOOD</span>
                  </div>
                  <h3 className="font-bold mb-1">What makes Fila unique in its attitude and...</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The singer-songwriter has been spotted in the label garment...
                  </p>
                  <p className="text-xs text-gray-500">#fashion</p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image 19.png"
                  alt="Fashion article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-gray-500">SIDDHANT</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-red-500">FASHION</span>
                  </div>
                  <h3 className="font-bold mb-1">French Connection announces Siddhant Chaturvedi as...</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The singer-songwriter has been spotted in the label garment...
                  </p>
                  <p className="text-xs text-gray-500">#fashion</p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/a10.svg"
                  alt="Beauty article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-pink-500">BEAUTY</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">NEWS</span>
                  </div>
                  <h3 className="font-bold mb-1">Sugar Cosmetics unveils its 60th brand-owned store</h3>
                  <p className="text-sm text-gray-600 mb-2">The new store features the complete range of products...</p>
                  <p className="text-xs text-gray-500">#beauty</p>
                </div>
              </div>

              {/* Article 4 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image 24.png"
                  alt="Fashion article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-red-500">SHAILESH</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-red-500">FASHION</span>
                  </div>
                  <h3 className="font-bold mb-1">Fashion brand guru, Shailesh Chaturvedi of Arvind Fashions</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The Arvind brand has been a signature one for 10 years...
                  </p>
                  <p className="text-xs text-gray-500">#fashion</p>
                </div>
              </div>

              {/* Article 5 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/a12.svg"
                  alt="Fashion article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-red-500">FASHION</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">RETAILERS</span>
                  </div>
                  <h3 className="font-bold mb-1">Indian fashion retailers to witness revival</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The singer-songwriter has been spotted in the label garment...
                  </p>
                  <p className="text-xs text-gray-500">#fashion</p>
                </div>
              </div>

              {/* Article 6 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image 14.png"
                  alt="Wellness article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-green-500">WELLNESS</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">NEWS</span>
                  </div>
                  <h3 className="font-bold mb-1">Aditya Shetty becomes the face of Just Human</h3>
                  <p className="text-sm text-gray-600 mb-2">The wellness brand has announced its new ambassador...</p>
                  <p className="text-xs text-gray-500">#wellness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beauty & Wellness Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Beauty & Wellness</h2>
              <Link href="/beauty-wellness" className="text-sm text-gray-500 flex items-center">
                See more 
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image342.svg"
                  alt="Wellness article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-green-500">WELLNESS</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">NEWS</span>
                  </div>
                  <h3 className="font-bold mb-1">Indian spas dazzle at Cannes 2024</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The wellness industry makes its mark at the prestigious event...
                  </p>
                  <p className="text-xs text-gray-500">#wellness</p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image43.svg"
                  alt="Beauty article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-pink-500">BEAUTY</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">NEWS</span>
                  </div>
                  <h3 className="font-bold mb-1">Revuele Studios to expand footprint with 5 more...</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The beauty brand continues its expansion across major cities...
                  </p>
                  <p className="text-xs text-gray-500">#beauty</p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/image34.svg"
                  alt="Beauty article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold text-pink-500">BEAUTY</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs font-semibold text-gray-500">NEWS</span>
                  </div>
                  <h3 className="font-bold mb-1">Revuele Studios to expand footprint with 5 more...</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The beauty brand continues its expansion across major cities...
                  </p>
                  <p className="text-xs text-gray-500">#beauty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Food & Beverage Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Food & Beverage</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Article 1 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/a6.svg"
                  alt="Food article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">Yiwu Farmer Foods enters Retail with Wow! Momo, New China</h3>
                  <p className="text-xs text-gray-500">#lifestyle</p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/a4.jpg.svg"
                  alt="Food article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">Barista Coffee Company opens its first café in Ahmedabad</h3>
                  <p className="text-xs text-gray-500">#lifestyle</p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/a8.svg"
                  alt="Food article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">Good Flippin' Burgers opens 8+ Kitchens Across 4 Brands</h3>
                  <p className="text-xs text-gray-500">#lifestyle</p>
                </div>
              </div>

              {/* Article 4 */}
              <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <Image
                  src="/a15.png"
                  alt="Food article"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">How Keventers is making milkshakes business space lively</h3>
                  <p className="text-xs text-gray-500">#lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
   </div>
   <NewsGrid/>
   <div className="max-w-8xl px-4 py-8">
      {/* Top Categories Row */}
      <div className="grid  grid-cols-5 lg:grid-cols-5 gap-6 mb-12">
   
</div>
      {/* Middle Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Shopping Centers Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Shopping Centers</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">SELECT CITYWALK</span>
                <span className="text-xs text-gray-500"> | LIFESTYLE</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">Select Citywalk opens 4 new stores in June</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image23.svg"
                  alt="Select Citywalk"
                  width={120}
                  height={120}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">
                  The new stores opened at Select Citywalk include Chika in Raymond, Looks Salon and more...
                </p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#real stories podcast</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">INFINITI MALL</span>
                <span className="text-xs text-gray-500"> | NEWS</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">
                  Infiniti Mall collaborates with T-Series & PVR Inox to unveil Adipurush artwork
                </h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/a9.svg"
                  alt="Infiniti Mall"
                  width={120}
                  height={120}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">
                  Constructed by Rushi's Cubex mosaic artist Satyen Santimone and Nishi from Nishi Artwork...
                </p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#real stories podcast</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">MULTIMEDIA</span>
                <span className="text-xs text-gray-500"> | NEWS</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">
                  DLF creating new retail space in Delhi for France's Galeries Lafayette
                </h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image 24.png"
                  alt="DLF retail space"
                  width={120}
                  height={120}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">
                  DLF is revamping space for its luxury retailer between two of its top-end Emporio and Promenade...
                </p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#real stories podcast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Privilege Members Corner Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Privilege Members Corner</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <Image
                src="/image 14.png"
                alt="Privilege Members"
                width={500}
                height={200}
                className="w-full object-cover rounded mb-3"
              />
              <h3 className="font-medium text-sm mb-1">
                India D2C Summit & Awards 2023 Trailblazing Brands and Professionals
              </h3>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Podcast</h2>
                <Link href="#" className="text-sm text-gray-500 flex items-center">
                  See more <span className="ml-1">→</span>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Image
                    src="/image23.svg"
                    alt="Podcast 1"
                    width={60}
                    height={60}
                    className="object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-sm">Simplifying Retail Industry Compliance Management</h3>
                    <p className="text-xs text-gray-600">TV & Film Film Interviews</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Image
                    src="/a12.svg"
                    alt="Podcast 2"
                    width={60}
                    height={60}
                    className="object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-sm">Simplifying Retail Industry Compliance Management</h3>
                    <p className="text-xs text-gray-600">TV & Film Film</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-8"></div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Supply Chain Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Supply Chain</h2>
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
                <h3 className="font-medium text-sm">Ecom Express appoints Ajay Chitkara as CEO</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image 33.svg"
                  alt="Ecom Express"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">Chitkara, who is a veteran in the industry...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#fashion</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | FASHION</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">DTDC sets up super hub in...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image 19.png"
                  alt="DTDC hub"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">The facility spans over half of space...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#fashion</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">LIFESTYLE</span>
                <span className="text-xs text-gray-500"> | RTB</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">KSH Distriparks bolsters its fleet with...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image342.svg"
                  alt="KSH Distriparks"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">With the addition of new vehicles, the...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#fashion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Marketing</h2>
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
                <h3 className="font-medium text-sm">Vlogger Empower collaborates with actor...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image14.svg"
                  alt="Vlogger Empower"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">Vlogger Empower's partnership with series will...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#fashion</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">From Yourshoes to special offers, here's a quick...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image14.svg"
                  alt="Yourshoes"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">The campaign has been spotted in the hybrid garment...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#fashion</span>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FASHION</span>
                <span className="text-xs text-gray-500"> | TAYLOR SWIFT</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">Malabar Gold & Diamonds ropes...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image14.svg"
                  alt="Malabar Gold"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">Signing NTR Jr who stands in...</p>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#fashion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Technology</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FINANCE</span>
                <span className="text-xs text-gray-500"> | NEWS</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">
                  PE firm Carlyle offloads entire Carlyle through its special purpose...
                </h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image14.svg"
                  alt="PE firm Carlyle"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600">FINANCE</span>
                <span className="text-xs text-gray-500"> | NEWS</span>
              </div>
              <Link href="#" className="block mb-2">
                <h3 className="font-medium text-sm">B2B managed marketplace The Yarn, The Investment...</h3>
              </Link>
              <div className="flex gap-3">
                <Image
                  src="/image14.svg"
                  alt="B2B marketplace"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <p className="text-xs text-gray-600">more...</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-1">
                  <span className="text-xs font-bold text-red-600">FINANCE</span>
                  <span className="text-xs text-gray-500"> | NEWS</span>
                </div>
                <Link href="#" className="block mb-2">
                  <h3 className="font-medium text-xs">Sequoia Capital exits Go Fashion, US-based Sequoia Capital...</h3>
                </Link>
                <Image
                  src="/image 33.svg"
                  alt="Sequoia Capital"
                  width={120}
                  height={60}
                  className="w-full object-cover rounded"
                />
              </div>
              </div>
              </div>
              </div>
              </div>
              

         
      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Case Studies Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Case Studies</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src="/image 19.png"
                alt="Case Study 1"
                width={220}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium text-xs">West Mom Foods enters Retail with West Mom, Wine China</h3>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <Image
                src="/image 19.png"
                alt="Case Study 2"
                width={220}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium text-xs">Simplifying Compliance Management for the latest...</h3>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <Image
                src="/image 19.png"
                alt="Case Study 3"
                width={220}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium text-xs">Digitizing Retailers' Express Through Focus On...</h3>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Essays Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Photo Essays</h2>
            <Link href="#" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/image34.svg"
                alt="Photo Essay 1"
                width={150}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium text-xs">JACKANDJILL's Moment Sings for #DontHideBack 3.0</h3>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

            <div>
              <Image
                src="/image34.svg"
                alt="Photo Essay 2"
                width={150}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium text-xs">JACKANDJILL's Moment Singh for #DontHideBack 3.0</h3>
              <div className="mt-1">
                <span className="text-xs text-gray-500">#retail</span>
              </div>
            </div>

          </div>
        </div>
      </div>
  
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
   
      <div className="mt-8 mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Images Group Events</h2>
          <Link href="#" className="text-sm text-gray-500 flex items-center">
            See more 
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <Image
                  src="/image 24.png"
                  alt="DHL D2C India Summit & Awards"
                  width={160}
                  height={80}
                  className="object-contain"
                />
                <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">TECHNOLOGY</div>
              </div>
              <h3 className="font-bold mt-4 text-gray-800">D2C India</h3>
              <p className="text-xs text-gray-500 mt-1">28-29 Feb | New Delhi | Aerocity</p>
              <p className="text-sm mt-3">Get inspired building brands for the next decade of consumption</p>
              <div className="mt-4">
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Powered by</span>
                <Image
                  src="/placeholder.svg?height=30&width=100"
                  alt="GreenHonchos"
                  width={100}
                  height={30}
                  className="inline-block ml-2"
                />
              </div>
            </div>
          </div>

          {/* Unravelling the Arches */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Image
                src="/image14.svg"
                alt="Unravelling the Arches"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="font-bold mt-4 text-gray-800">Unravelling the Arches reinvention plan</h3>
              <p className="text-sm mt-2">The brand is on its way to becoming more powerful</p>
              <p className="text-xs text-gray-500 mt-3">25 Jan 2023 | Sanvi Jain</p>
            </div>
          </div>

          {/* India Food Forum */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Image
                src="/image14.svg"
                alt="India Food Forum"
                width={80}
                height={80}
                className="object-contain rounded-full"
              />
              <h3 className="font-bold mt-4 text-gray-800">India Food Forum</h3>
              <p className="text-sm mt-2">The place to meet all India retail industry leaders</p>
              <p className="text-xs text-gray-500 mt-3">8 Mar | Mumbai | BKC</p>
              <button className="mt-3 text-xs bg-red-500 text-white px-3 py-1 rounded">Registration Now →</button>
            </div>
          </div>

          {/* Phygital Retail Convention */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Image
                src="/image14.svg"
                alt="Phygital Retail Convention"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="font-bold mt-4 text-gray-800">Phygital Retail Convention</h3>
              <p className="text-sm mt-2">India's Largest Retail Intelligence Event</p>
              <p className="text-xs text-gray-500 mt-3">24-25 May | Mumbai | BKC</p>
              <button className="mt-3 text-xs bg-red-500 text-white px-3 py-1 rounded">Registration Now →</button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Image
                src="/image14.svg"
                alt="India Fashion Forum"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="font-bold mt-4 text-gray-800">India Fashion Forum</h3>
              <p className="text-sm mt-2">The must-attend India Fashion Forum (IFF)</p>
              <p className="text-xs text-gray-500 mt-3">23 Mar | Mumbai</p>
              <button className="mt-3 text-xs bg-red-500 text-white px-3 py-1 rounded">Registration Now →</button>
            </div>
          </div>

        
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Image
                src="/image14.svg"
                alt="Shopping Centres Next"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="font-bold mt-4 text-gray-800">Shopping Centres Next</h3>
              <p className="text-sm mt-2">Shopping Centres Next is India's most influential retail real estate event</p>
              <p className="text-xs text-gray-500 mt-3">25 May | Mumbai | BKC</p>
              <button className="mt-3 text-xs bg-red-500 text-white px-3 py-1 rounded">Registration Now →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Store */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Book Store</h2>
          <Link href="#" className="text-sm text-gray-500 flex items-center">
            See more
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Progressive Grocer */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image41.svg"
              alt="Progressive Grocer - June 2023"
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium">Progressive Grocer - June 2023</h3>
            </div>
          </div>

          {/* Images Business Of Fashion */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image41.svg"
              alt="Images Business Of Fashion - June 2023"
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium">Images Business Of Fashion - June 2023</h3>
            </div>
          </div>

          {/* Shopping Centre News */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image41.svg"
              alt="Shopping Centre News - May 2023"
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium">Shopping Centre News - May 2023</h3>
            </div>
          </div>

          {/* Phygital May-June 2023 */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image41.svg"
              alt="Phygital May-June 2023"
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium">Phygital May-June 2023</h3>
            </div>
          </div>

          {/* Progressive Grocer - June 2023 (duplicate) */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image41.svg"
              alt="Progressive Grocer - June 2023"
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium">Progressive Grocer - June 2023</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Reconnect */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Reconnect</h2>
          <Link href="#" className="text-sm text-gray-500 flex items-center">
            See more 
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Arvind Fashions' data-driven digital transformation */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image13.svg"
              alt="Arvind Fashions' data-driven digital transformation"
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">Arvind Fashions' data-driven digital transformation</h3>
              <p className="text-xs text-gray-500 mt-2">
                The brand is on its way to becoming more powerful in India by supercharging its omni-channel...
              </p>
            </div>
          </div>

          {/* US denim brand Lee opens outlets in Sikar, Panna */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image13.svg"
              alt="US denim brand Lee opens outlets in Sikar, Panna"
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">US denim brand Lee opens outlets in Sikar, Panna</h3>
              <p className="text-xs text-gray-500 mt-2">
                Lee and Wrangler have opened two new stores in Sikar, Panna...
              </p>
            </div>
          </div>

          {/* Arvind Fashions' data-driven digital transformation (duplicate) */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image13.svg"
              alt="Arvind Fashions' data-driven digital transformation"
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">Arvind Fashions' data-driven digital transformation</h3>
              <p className="text-xs text-gray-500 mt-2">
                The brand is on its way to becoming more powerful in India by supercharging its omni-channel...
              </p>
            </div>
          </div>

          {/* US denim brand Lee opens outlets in Sikar, Panna (duplicate) */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <Image
              src="/image13.svg"
              alt="US denim brand Lee opens outlets in Sikar, Panna"
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">US denim brand Lee opens outlets in Sikar, Panna</h3>
              <p className="text-xs text-gray-500 mt-2">
                Lee and Wrangler have opened two new stores in Sikar, Panna...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement */}
      <div className="mb-12 text-center">
        <div className="bg-gray-100 p-2 text-xs text-gray-500">— Advertisement —</div>
        <Image
          src="/image13.svg"
          alt="Advertisement"
          width={600}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Footer */}
      <footer className="border-t pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/pimage 19.png"
              alt="IndiaRetailing"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 mb-2">Images Multimedia Ltd.</p>
            <p className="text-sm text-gray-600 mb-2">S-61A, Okhla Industrial Area Phase II, New Delhi 110020</p>
            <p className="text-sm text-gray-600 mb-2">Images Multimedia Ltd.</p>
            <p className="text-sm text-gray-600 mb-2">F-515, First Deck Plaza</p>
            <p className="text-sm text-gray-600 mb-2">Sector 3, MIDC, Mhape, Navi Mumbai 400702</p>

            <h4 className="font-medium text-gray-800 mt-6 mb-2">Contact us</h4>
            <p className="text-sm text-gray-600">Tel: +91-9667955551</p>
            <p className="text-sm text-gray-600">Email: info@indiaretailing.com</p>

            <h4 className="font-medium text-gray-800 mt-6 mb-2">Our Social Media</h4>
            <div className="flex space-x-3 mt-2">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">f</div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">in</div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">yt</div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">tw</div>
              </Link>
            </div>

            <h4 className="font-medium text-gray-800 mt-6 mb-2">Download IndiaRetailing App</h4>
            <div className="flex space-x-2 mt-2">
              <Image src="/placeholder.svg?height=40&width=120" alt="Google Play" width={120} height={40} />
              <Image src="/placeholder.svg?height=40&width=120" alt="App Store" width={120} height={40} />
            </div>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  About IndiaRetailing.com
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Meet the team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Advertise with us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact us
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">Bookstore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Magazines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Yearbooks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Other publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Fashion & Lifestyle
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Beauty & Wellness
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Consumer Durables & IT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Home Décor & Furnishing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Specialty Retail
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">Videos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Retail with Retail Realty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  The Store
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  IR Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Leaders list
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  People
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Finance & Funding
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  D2C
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Shopping Centers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Trends
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Case Studies
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">IR Prime Subscription Box</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Lorem ipsum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Lorem ipsum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Lorem ipsum
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  India Food Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Shopping Centre Next
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Phygital Retail Convention
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  India D2C Summit & Awards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Internet Commerce Summit
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">Retail Functions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Operations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  HR
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Supply Chain
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          Copyright © 2023 indiaretailing.com. All Rights Reserved.
        </div>
      </footer>
    </div>

    </div>
</div>

    

  );
}