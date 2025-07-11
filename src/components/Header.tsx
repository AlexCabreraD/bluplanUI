import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Home", left: "left-0" },
  { label: "Services", left: "left-16" },
  { label: "Floor Plans", left: "left-[146px]" },
  { label: "Projects", left: "left-[243px]" },
  { label: "About Us", left: "left-[322px]" },
  { label: "Resources", left: "left-[406px]" },
  { label: "Contact Us", left: "left-[501px]" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-20 z-50 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-black/5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80">
            <Image
              className="w-[159px] h-[35px]"
              alt="Blueplan logo"
              src="/images/logos/BlueplanLogo.svg"
              width={159}
              height={35}
            />
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-200 whitespace-nowrap relative py-2 px-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}