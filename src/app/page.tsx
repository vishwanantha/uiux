import Image from "next/image";
import Link from "next/link";
import Header from "./common/header";
import VideoWall from "./common/video";
import NewsGrid from "./common/new";
import ThreeColumnNews from "./common/center";
import ReconnectGrid from "./common/reonnect";

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

    <div className="font-sans max-w-8xl mx-auto p-5 text-gray-800">
    
    <div><Header/></div>
  <div className="font-sans mx-auto  bg-gray-50  mt-10 text-gray-800">
  {/* Featured Articles with Inline Image and Text */}
  <section className="mb-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredArticles.map((article) => (
        <Link
          href={article.link}
          key={article.id}
          className="group border-b border-gray-200 pb-4 hover:border-red-500 transition-colors"
        >
          <div className="flex items-start gap-3"> {/* Changed to flex row */}
            {/* Image container - smaller and inline */}
            <div className="flex-shrink-0 w-[80px] h-[80px] overflow-hidden bg-gray-100">
              <img
                src={article.image || "/placeholder-article.jpg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text content */}
            <div className="flex flex-col">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                {article.tag}
              </span>
              <h3 className="text-base font-medium mt-1 group-hover:text-red-600 transition-colors">
                {article.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
</div>
  

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
         
          <div className="lg:col-span-2">
            
            <Link href="/article/rahul-gandhi-manipur" className="group bg-white rounded-md overflow-hidden shadow-sm mb-6 block hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/imag2.png"
                  alt="Rahul Gandhi In Manipur"
                  width={400}
                  height={200}
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

          
            <div className="space-y-2">
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
                  className="bg-white rounded-md overflow-hidden shadow-sm p-9 flex items-center hover:shadow-md transition-shadow group"
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
                        <span key={i} className="mr-2 hover:text-gray-700 transition-colors">{tag}</span>
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

     
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md overflow-hidden shadow-sm p-4 mb-6 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-bold mb-4">Latest News</h2>

              <div className="space-y-2">
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
      
 
        <section className="mb-8 bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow">
  <div className="p-4 border-b">
    <h2 className="text-lg font-bold">Web Specials</h2>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
    {/* Left Column - Featured Article */}
    <Link href="/article/rahul-gandhi-manipur" className="lg:col-span-1 group">
      <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
        <Image
          src="/imag2.png"
          alt="Rahul Gandhi In Manipur"
          fill
          className="object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 mb-2">IN FOCUS</span>
          <h3 className="text-white text-lg font-bold group-hover:underline">
            Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
          </h3>
          <p className="text-white/80 text-sm mt-1">Rahul Gandhi</p>
        </div>
      </div>
    </Link>

    {/* Middle Column - Bullet Point List */}
    <div className="lg:col-span-1 border-l border-r border-gray-200 px-4">
      <ul className="space-y-4 pb-4 border-b border-gray-200">
        {[
          "2028 managed marketplaces",
          "Sequola Capital exits Go",
          "Feishon",
          "2028 managed marketplaces", 
          "Sequola Capital exits Go",
          "The Yarn"
        ].map((item, index) => (
          <li key={index} className="flex items-start group">
            <span className="text-red-600 mr-2 font-bold">•</span>
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

    {/* Right Column - Advertisement */}
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
          <p className="text-orange-800 text-xs">EFFECTIVE PRICE OF ₹125,900</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
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
    <h2 className="text-[12px] font-bold">Trending</h2>
  </div>
  <div className="flex flex-wrap gap-1">
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
      "Live Cricket Score",
      ">",
      "<"
    ].map((topic, index) => (
      <Link
        key={index}
        href={`/trending/${topic.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block px-2.5 py-1.5 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-red-200 hover:bg-red-50"
      >
        <span className="text-xs text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">
          {topic}
        </span>
      </Link>
    ))}
  </div>
</section>
        
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

     
       

<VideoWall/>
     
  
    <div className="flex flex-col min-h-screen">
 
     

   
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-4">
       
          <div className="mb-2 mt-0 mr-12 ml-12">
            <Image
              src="/image1.svg"
              alt="GUESS Watches"
              width={700}
              height={150}
              className=" w-full h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
  {/* Left Column - Fashion & Lifestyle */}
  <div className="w-full lg:w-2/3">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold">Fashion & Lifestyle</h2>
    <Link href="/fashion-lifestyle" className="text-sm text-gray-500 flex items-center">
      See more
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Horizontal Cards */}
    {[
      {
        image: "/image.png",
        tag: "FASHION",
        section: "FOOD",
        title: "What makes Fila unique is its attitude",
        description: "The singer-songwriter has been spotted in the hybrid garment...",
      },
      {
        image: "/imge2.png",
        tag: "FASHION",
        section: "FOOD",
        title: "What makes Fila unique is its attitude",
        description: "The singer-songwriter has been spotted in the hybrid garment...",
      },
      {
        image: "/imge3.png",
        tag: "FASHION",
        section: "FOOD",
        title: "What makes Fila unique is its attitude",
        description: "The singer-songwriter has been spotted in the hybrid garment...",
      },
      {
        image: "/image20.png",
        tag: "FASHION",
        section: "FOOD",
        title: "What makes Fila unique is its attitude",
        description: "The singer-songwriter has been spotted in the hybrid garment...",
      },
      {
        image: "/image217.png",
        tag: "FASHION",
        section: "FOOD",
        title: "What makes Fila unique is its attitude",
        description: "The singer-songwriter has been spotted in the hybrid garment...",
      },
      {
        image: "/image119.png",
        tag: "FASHION",
        section: "FOOD",
        title: "What makes Fila unique is its attitude",
        description: "The singer-songwriter has been spotted in the hybrid garment...",
      },
    ].map((item, idx) => (
      <div key={idx} className="flex border border-gray-100 rounded-md overflow-hidden shadow-sm h-[140px]">
        {/* Left: Image */}
        <div className="w-[40%] bg-gray-50">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Text */}
        <div className="w-[60%] p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-red-500 mb-1">
              {item.tag} <span className="text-gray-400">|</span> {item.section}
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">#{item.tag.toLowerCase()}</p>
        </div>
      </div>
    ))}
  </div>
</div>


  {/* Right Column - Beauty & Wellness */}
  <div className="w-full lg:w-2/6">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold">Beauty & Wellness</h2>
    <Link href="/beauty-wellness" className="text-sm text-gray-500 flex items-center">
      See more
    </Link>
  </div>

  <div className="space-y-3">
    {/* Beauty & Wellness Cards */}
    {[
      {
        image: "/image342.svg",
        tag: "WELLNESS",
        title: "Indian spas dazzle at Cannes 2024",
        description: "The wellness industry makes its mark at the prestigious event...",
      },
      {
        image: "/image43.svg",
        tag: "BEAUTY",
        title: "Revuele Studios to expand footprint with 5 more...",
        description: "The beauty brand continues its expansion across major cities...",
      },
      {
        image: "/image43.svg",
        tag: "BEAUTY",
        title: "Revuele Studios to expand footprint with 5 more...",
        description: "The beauty brand continues its expansion across major cities...",
      },
      {
        image: "/image43.svg",
        tag: "BEAUTY",
        title: "Revuele Studios to expand footprint with 5 more...",
        description: "The beauty brand continues its expansion across major cities...",
      },
    
    ].map((item, idx) => (
      <div
        key={idx}
        className="border border-gray-100 rounded-md overflow-hidden shadow-sm flex"
      >
        {/* Left side: Image */}
        <div className="w-[90px] flex-shrink-0 bg-gray-50 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: Content */}
        <div className="p-4 flex flex-col justify-center flex-1">
          <div className="flex gap-2 items-center mb-1">
            <span className={`text-xs font-semibold ${item.tag === 'BEAUTY' ? 'text-pink-500' : 'text-green-500'}`}>
              {item.tag}
            </span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs font-semibold text-gray-500">NEWS</span>
          </div>
          <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h3>
          <p className="text-xs text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

</div>

        
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Food & Beverage</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
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
                  <p className="text-xs text-gray-500">lifestyle</p>
                </div>
              </div>

              
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
                  <p className="text-xs text-gray-500">lifestyle</p>
                </div>
              </div>

            
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
                  <p className="text-xs text-gray-500">lifestyle</p>
                </div>
              </div>

            
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
                  <p className="text-xs text-gray-500">lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
   </div>
   <NewsGrid/>
   <div className="max-w-8xl px-4 py-8">
     
      <div className="grid  grid-cols-5 lg:grid-cols-5 gap-6 mb-12">
   
</div>
     
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
      {[
        {
          title: 'Select Citywalk opens 4 new stores in June',
          tag: 'SELECT CITYWALK',
          category: 'LIFESTYLE',
          description:
            'The new stores opened at Select Citywalk include Choko la, Raymond, Looks Salon and Home Stop',
          image: '/image23.svg',
        },
        {
          title:
            'Infiniti Mall collaborates with T-Series & PVR Inox to unveil Adipurush artwork',
          tag: 'INFINITI MALL',
          category: 'NEWS',
          description:
            "Constructed by Rubik's Cubes mosaic artist Selwyn Santmajor and Nikhil from Nikhil Artwork",
          image: '/a9.svg',
        },
        {
          title:
            "DLF creating new retail space in Delhi for France's Galeries Lafayette",
          tag: 'MULTIMEDIA',
          category: 'NEWS',
          description:
            'DLF is earmarking space for the luxury retailer between two of its top-end malls, Emporio and Promenade.',
          image: '/image 24.png',
        },
      ].map((item, idx) => (
        <div key={idx}>
         
         <div className="flex gap-3">
  <Image
    src={item.image}
    alt={item.title}
    width={120}
    height={90}
    className="object-cover rounded-md"
  />

  {/* Right-side text column */}
  <div className="flex flex-col">
    <div className="mb-1 flex items-center text-[12px]">
      <p className="font-semibold text-red-600">{item.tag}</p>
      <p className="text-gray-500 ml-1">| {item.category}</p>
    </div>

    <Link href="#" className="mb-1">
      <h3 className="font-medium text-sm">{item.title}</h3>
    </Link>

    <p className="text-[12px] text-gray-600">{item.description}</p>

    <span className="mt-1 text-[12px] text-gray-500">#real stories podcast</span>
  </div>
</div>

          <div className="mt-1">
            <span className="text-[12px] text-gray-500">#real stories podcast</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Privilege Members Corner */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg">Privilege Members Corner</h2>
      <Link href="#" className="text-sm text-gray-500 flex items-center">
        See more <span className="ml-1">→</span>
      </Link>
    </div>

    <div className="space-y-1  ml-31">
      {/* Featured Video Box */}
      <div className="relative ml-10">
        <Image
          src="/image327.png"
          alt="Privilege Members"
          width={400}
          height={100}
          className="w-[400px] object-cover rounded-md"
        />
        <div className="absolute bottom-15 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
          <img src="youtube.png"/><span>5 min</span> 
        </div>
        <h3 className="font-medium text-sm mt-2 text-black">
          India D2C Summit & Awards 2023 Trailblazing Brands and Professionals
        </h3>
      </div>

      {/* Podcast Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-sm transition-shadow">
  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
    <h2 className="font-bold text-lg">Podcast</h2>
    <Link href="#" className="text-sm text-gray-500 hover:text-red-600 flex items-center transition-colors">
      See more <span className="ml-1">→</span>
    </Link>
  </div>

  <div className="space-y-4">
    {[
      {
        title: 'Simplifying Retail Industry Compliance Management',
        category: 'TV & Film Interviews',
        image: '/logod.png.png',
      },
      {
        title: 'Simplifying Retail Industry Compliance Management',
        category: 'TV & Film',
        image: '/logod1.png',
      },
    ].map((podcast, idx) => (
      <div 
        className="flex gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100" 
        key={idx}
      >
        <div className="flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
          <Image
            src={podcast.image}
            alt="Podcast"
            width={60}
            height={60}
            className="object-cover w-[60px] h-[60px]"
          />
        </div>
        <div>
          <h3 className="font-medium text-sm hover:text-red-600 transition-colors">
            {podcast.title}
          </h3>
          <p className="text-xs text-gray-600">{podcast.category}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  </div>
</div>


  
      <div className="w-full h-px bg-gray-200 my-8"></div>

      <div className="max-w-4xl mx-auto px-4 py-4">
       
       <div className="mb-2 mt-0 mr-15 ml-15">
         <Image
           src="/Groupty.png"
           alt="GUESS Watches"
           width={700}
           height={150}
           className=" w-full h-auto rounded-md"
         />
       </div>
       </div>

    <ThreeColumnNews/>
    

         
      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-8">
        {/* Case Studies Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Case Studies</h2>
            <Link href="" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 ">
            <div className="bg-white  rounded-lg overflow-hidden"> 
              <Image
                src="/image26.jpg"
                alt="Case Study 1"
                width={220}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium ml-2 text-xs">West Mom Foods enters Retail with West Mom, Wine China</h3>
              <div className="mt-1">
                <span className="text-xs ml-2  text-gray-500">retail</span>
              </div>
            </div>

            <div className="bg-white  rounded-lg overflow-hidden"> 
              <Image
                src="/image27.jpg"
                alt="Case Study 2"
                width={220}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium ml-2  text-xs">Simplifying Compliance Management for the latest...</h3>
              <div className="mt-1">
                <span className="text-xs ml-2  text-gray-500">retail</span>
              </div>
            </div>

            <div className="bg-white  rounded-lg overflow-hidden"> 
              <Image
                src="/image28.jpg"
                alt="Case Study 3"
                width={220}
                height={120}
                className="w-full object-cover rounded mb-2"
              />
              <h3 className="font-medium ml-2  text-xs">Digitizing Retailers' Express Through Focus On...</h3>
              <div className="mt-1">
                <span className="text-xs ml-2  text-gray-500">retail</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Essays Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Photo Essays</h2>
            <Link href="" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
              <div className="bg-white border border-gray-50 rounded-lg overflow-hidden"> 
              <Image
                src="/image34.svg"
                alt="Photo Essay 1"
                width={150}
                height={120}
                className="w-[90%] object-cover rounded mb-2"
              />
              <h3 className="font-medium  ml-2  text-xs">JACKANDJILL's Moment Sings for DontHideBack 3.0</h3>
              <div className="mt-1">
                <span className="text-xs ml-2  text-gray-500">retail</span>
              </div>
            </div>

            <div className="bg-white  rounded-lg overflow-hidden"> 
              <Image
                src="/image34.svg"
                alt="Photo Essay 2"
                width={150}
                height={120}
                className="w-[90%]  object-cover rounded mb-2"
              />
              <h3 className="font-medium ml-2  text-xs">JACKANDJILL's Moment Singh for DontHideBack 3.0</h3>
              <div className="mt-1">
                <span className="text-xs ml-2   text-gray-500">retail</span>
              </div>
            </div>

          </div>
        </div>
      </div>
  
    

   
   
      <div className="mt-8 mb-12">
  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Images Group Events</h2>
    <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">
      See more →
    </Link>
  </div>

  {/* Grid layout */}
  <div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

    {/* Main left card - taller for emphasis */}
    <div className="bg-white rounded-lg shadow-sm  border-gray-200 overflow-hidden flex flex-col h-[500px]">
      <div className="h-[40%] bg-white p-4 flex items-center justify-center">
        <img 
          src="/link23.png" 
          alt="D2C India" 
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs text-red-600 font-semibold uppercase">Technology</span>
        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">D2C India</h3>
        <p className="text-sm text-gray-400 mb-3">Wed, 09 Aug 2023 | Barkha Dutt</p>
        <p className="text-sm text-gray-600 flex-1">
          Get inspired building brands for the next decade of consumption.
        </p>
        <button className="mt-4 text-sm font-medium text-red-600 hover:text-red-700 self-start">
          Registration Now →
        </button>
      </div>
    </div>

    {/* Right cards - horizontal layout inside each card */}
    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        {
          img: "image217.png",
          title: "Unwrapping the Arches reinvention plan",
          desc: "The Middle East Retail Forum (MRF) is a powerful platform.",
          bu:"Registration Now"
        },
        {
          img: "/image127.png",
          title: "Phygital Retail Convention",
          desc: "India's Largest Retail Intelligence Event.",
          bu:"Registration Now"
        },
        {
          img: "/image128.png",
          title: "India Fashion Forum",
          desc: "Launched in 2000, India Fashion Forum (IFF) is India's largest.",
          bu:"Registration Now"
        },
        {
          img: "image217.png",
          title: "India Food Forum",
          desc: "The aisles are open at India's most powerful food b2b.",
          bu:"Registration Now"
        },
        {
          img: "/image127.png",
          title: "Shopping Centres Next",
          desc: "Shopping Centres Next is India's most differentiated.",
          bu:"Registration Now"
        },
        {
          img: "/image128.png",
          title: "India Food Forum",
          desc: "Mobile commerce has become a worldwide phenomenon.",
          bu:"Registration Now"
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-sm border border-gray-200 flex h-[200px] overflow-hidden"
        >
          {/* Image - left side */}
          <div className="w-1/3 h-full flex items-center justify-center bg-gray-50">
            <img 
              src={card.img} 
              alt={card.title} 
              className="object-cover w-[90%] h-full"
            />
          </div>

          {/* Content - right side */}
          <div className="w-5/7 p-4 flex flex-col justify-center">
            <h3 className="text-sm font-bold text-gray-900 mb-1">{card.title}</h3>
            <p className="text-xs text-gray-600">{card.desc}</p>
            <button className="mt-4 text-sm font-medium text-red-600 hover:text-red-700 self-start">
            {card.bu}
        </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

<div className="mt-8 mb-0">

      {/* Book Store */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Book Store</h2>
          <Link href="" className="text-sm text-gray-500 flex items-center">
            See more
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Progressive Grocer */}
          <div className="bg-white  rounded-lg overflow-hidden">
            <Image
              src="/image1.jpg"
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
          <div className="bg-white  rounded-lg overflow-hidden">
            <Image
              src="/image2.jpg"
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
          <div className="bg-white  rounded-lg overflow-hidden">
            <Image
              src="/image3.jpg"
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
          <div className="bg-white  rounded-lg overflow-hidden">
            <Image
              src="/image4.jpg"
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
          <div className="bg-white  rounded-lg overflow-hidden">
            <Image
              src="/image5.jpg"
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
    <ReconnectGrid/>
    

      {/* Advertisement */}
      <div className="mb-12 text-center">
        <div className=" text-xs text-gray-500">— Advertisement —</div>
        <div className="max-w-4xl mx-auto px-4 py-4">
       
       <div className="mb-2 mt-0 mr-15 ml-15">
         <Image
           src="/Groupty.png"
           alt="GUESS Watches"
           width={700}
           height={150}
           className=" w-full h-auto rounded-md"
         />
       </div>
       </div>
      </div>

      {/* Footer */}
      <footer className="border-t pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/indiaretail.png"
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
              <Link href="" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">f</div>
              </Link>
              <Link href="" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">in</div>
              </Link>
              <Link href="" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">yt</div>
              </Link>
              <Link href="" className="text-gray-500 hover:text-gray-700">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center">tw</div>
              </Link>
            </div>

            <h4 className="font-medium text-gray-800 mt-6 mb-2">Download IndiaRetailing App</h4>
            <div className="flex space-x-2 mt-2">
              <Image src="/Group126.png" alt="Google Play" width={120} height={40} />
              <Image src="/Group125.png" alt="App Store" width={120} height={40} />
            </div>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  About IndiaRetailing.com
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Meet the team
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Advertise with us
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact us
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">Bookstore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Magazines
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Yearbooks
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
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
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Fashion & Lifestyle
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Beauty & Wellness
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Consumer Durables & IT
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Home Décor & Furnishing
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Specialty Retail
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">Videos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Retail with Retail Realty
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  The Store
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
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
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Leaders list
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  People
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Finance & Funding
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  D2C
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Shopping Centers
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Trends
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Research
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Case Studies
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">IR Prime Subscription Box</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Lorem ipsum
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Lorem ipsum
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
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
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  India Food Forum
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Shopping Centre Next
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Phygital Retail Convention
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  India D2C Summit & Awards
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Internet Commerce Summit
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-8 mb-4">Retail Functions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  Operations
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
                  HR
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-gray-600 hover:text-gray-900">
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