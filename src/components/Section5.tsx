import Divider from "./Divider";

export default function Section5() {
  return (
    <>
      <section className="py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#009ce0] rounded-[20px] px-8 py-16 text-center">
            <h2 className="text-white text-[52px] leading-[52px] font-bold mb-6 text-center">
              We turn visions into buildable spaces
            </h2>
            
            <p className="text-white text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let&apos;s design your future—stress-free. Reach out today for a free consultation.
            </p>
            
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#009ce0] transition-all duration-300 ease-in-out text-lg cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}