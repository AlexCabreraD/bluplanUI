import Divider from "./Divider";

export default function Section5() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#009ce0] to-[#0088cc] rounded-3xl px-8 py-20 lg:px-16 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Ready to Start Building?
              </div>
              
              <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
                Turn your vision into 
                <span className="block text-yellow-300">buildable reality</span>
              </h2>
              
              <p className="text-white/90 text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
                From concept to construction-ready plans. Get your free consultation and see how we make building dreams simple.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-[#009ce0] font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
                  Get Your Free Quote
                </button>
                <a 
                  href="#" 
                  className="text-white font-semibold inline-flex items-center gap-2 py-4 hover:gap-3 transition-all duration-200 group text-lg"
                >
                  Call (619) 960-2060
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
              
              <div className="mt-12 flex justify-center items-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  Free consultation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  Fast turnaround
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  Expert guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}