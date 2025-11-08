"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceTypes = [
    "Architectural Design",
    "ADU Design",
    "Consultation",
    "Project Management",
    "Other",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceTypeSelect = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: service,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 lg:py-16 xl:py-20 2xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-[#009ce0] leading-tight text-xl sm:text-2xl lg:text-3xl xl:text-[32px]">
                Send us a message
                <br />
                or call us.
              </h2>
            </div>

            <div className="space-y-4 pt-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex-shrink-0">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-[#009ce0] w-full h-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl xl:text-[28px]">
                  (619) 830-8110
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex-shrink-0">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-[#009ce0] w-full h-full"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </div>
                <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl xl:text-[28px]">
                  admin@bluplanstudio.com
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 flex-shrink-0 mt-1.5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-[#009ce0] w-full h-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.757.433c.112.055.208.1.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-800 leading-relaxed text-lg sm:text-xl lg:text-2xl xl:text-[28px]">
                  <div>1223 3rd Ave</div>
                  <div>Suite F and E,</div>
                  <div>Chula Vista, CA 91911</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 sm:px-6 py-5 bg-[#e5e5e5] border-0 rounded-none text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-0 focus:bg-[#e5e5e5] text-sm min-h-[64px]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 sm:px-6 py-5 bg-[#e5e5e5] border-0 rounded-none text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-0 focus:bg-[#e5e5e5] text-sm min-h-[64px]"
                    required
                  />
                </div>
              </div>

              {/* Phone and Service Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 sm:px-6 py-5 bg-[#e5e5e5] border-0 rounded-none text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-0 focus:bg-[#e5e5e5] text-sm min-h-[64px]"
                  />
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-5 sm:px-6 py-5 bg-[#e5e5e5] border-0 rounded-none text-left text-gray-900 focus:outline-none focus:ring-0 focus:bg-[#e5e5e5] text-sm flex items-center justify-between min-h-[64px]"
                  >
                    <span className={formData.serviceType ? "text-gray-900" : "text-gray-600"}>
                      {formData.serviceType || "Service type"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-10">
                      {serviceTypes.map(service => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceTypeSelect(service)}
                          className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-5 sm:px-6 py-5 bg-[#e5e5e5] border-0 rounded-none text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-0 focus:bg-[#e5e5e5] text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-end pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-transparent border-0 text-black font-medium group relative pb-1 cursor-pointer text-lg sm:text-xl"
                >
                  <span>Send Message</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200 font-bold text-xl leading-none flex items-center">
                    →
                  </span>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
