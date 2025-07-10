import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgba(15, 20, 37, 1)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-5 lg:pr-8">
            <div className="mb-6">
              <Image
                src="/images/logos/BlueplanLogo.svg"
                alt="BluPlan Studio Logo"
                width={318}
                height={70}
                className="h-[70px] w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              We turn your building ideas into ready-to-build plans—fast, clear, and hassle-free.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Floor Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#009ce0] rounded flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-white" />
                </div>
                <span className="text-gray-300">(619) 960-2060</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#009ce0] rounded flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-white" />
                </div>
                <span className="text-gray-300">admin@bluplanstudio.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#009ce0] rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={14} className="text-white" />
                </div>
                <div className="text-gray-300">
                  <div>1223 3rd Ave</div>
                  <div>Suite F and Suite E,</div>
                  <div>Chula Vista, CA 91911</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Social Media</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-sm flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] to-[#D62976] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Copyright © Blueplan 2025</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}