import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    title: 'Supply Chain',
    items: [
      { img: '/image 33.svg', alt: 'Ecom Express', desc: 'Chitkara, who is a veteran in the industry...' },
      { img: '/image 19.png', alt: 'DTDC hub', desc: 'The facility spans over half of space...' },
      { img: '/image342.svg', alt: 'KSH Distriparks', desc: 'With the addition of new vehicles, the...' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { img: '/image20.jpg', alt: 'Vlogger Empower', desc: "Vlogger Empower's partnership with series will..." },
      { img: '/image21.jpg', alt: 'Yourshoes', desc: 'The campaign has been spotted in the hybrid garment...' },
      { img: '/image22.jpg', alt: 'Malabar Gold', desc: 'Signing NTR Jr who stands in...' },
    ],
  },
  {
    title: 'Technology',
    items: [
      { img: '/image23.jpg', alt: 'PE firm Carlyle', desc: 'Tech updates here' },
      { img: '/image24.jpg', alt: 'B2B marketplace', desc: 'more...' },
      { img: '/image25.jpg', alt: 'Sequoia Capital', desc: 'Sequoia innovation hub launch' },
    ],
  },
];

export default function ThreeColumnNews() {
  return (
    <div className="space-y-6">
      {/* Header Titles */}
      <div className="grid grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <div key={index} className="flex justify-between items-center">
            <h2 className="font-bold text-lg">{section.title}</h2>
            <Link href="" className="text-sm text-gray-500 flex items-center">
              See more <span className="ml-1">→</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Cards Under Each Column */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          sections.map((section, colIndex) => {
            const item = section.items[rowIndex];
            return (
              <div key={`${colIndex}-${rowIndex}`} className="flex gap-3">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={80}
                  height={80}
                  className="object-cover rounded w-[80px] h-[80px]"
                />
                <div className="flex flex-col justify-between">
                  <div className="mb-1">
                    <p className="text-xs font-bold text-red-600">FASHION</p>
                    <p className="text-xs text-gray-500">| TAYLOR SWIFT</p>
                  </div>
                  <Link href="" className="block mb-1">
                    <h3 className="font-medium text-sm">{item.alt}</h3>
                  </Link>
                  <p className="text-xs text-gray-600 mb-1">{item.desc}</p>
                  <span className="text-xs text-gray-500">fashion</span>
                </div>
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
}
