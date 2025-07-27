import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Home", left: "left-0", href: "/" },
  { label: "Services", left: "left-16", href: "/services" },
  { label: "Floor Plans", left: "left-[146px]", href: "#" },
  { label: "Projects", left: "left-[243px]", href: "#" },
  { label: "About Us", left: "left-[322px]", href: "#" },
  { label: "Resources", left: "left-[406px]", href: "#" },
  { label: "Contact Us", left: "left-[501px]", href: "#" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-20 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(15, 20, 37, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="cursor-pointer">
            <Image
              className="w-[159px] h-[35px]"
              alt="Blueplan logo"
              src="/images/logos/BlueplanLogo.svg"
              width={159}
              height={35}
            />
          </Link>

          <div className="flex items-center space-x-8">
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button className="bg-[#003b55] hover:bg-[#004a66] text-white px-6 py-2 rounded-[20px] text-sm font-bold transition-colors whitespace-nowrap cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}