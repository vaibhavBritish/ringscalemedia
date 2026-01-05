import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Using lucide-react for icons

const FooterSection = () => {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row min-h-[400px]">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 bg-[#EBEBEB] p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-5xl font-black text-[#333333] mb-2 tracking-tight">
            CONTACT US
          </h2>
          <h3 className="text-3xl font-bold text-[#333333] mb-8 tracking-tight uppercase">
            Ring Scale Media
          </h3>
          
          <div className="space-y-6 text-[#555555]">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D84B7E] w-6 h-6" fill="currentColor" />
              <address className=" text-xl font-serif italic">
                50 ELM Drive East Mississauga, ON L5a3x2 Canada
              </address>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#D84B7E] w-6 h-6" fill="currentColor" />
              <span className="text-xl font-serif italic">(+1) 760-208-1182</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#D84B7E] w-6 h-6" fill="currentColor" />
              <span className="text-xl font-serif italic">info@ringscalemedia.com</span>
            </div>
          </div>
        </div>

        {/* Right Side: Careers */}
        <div className="flex-1 bg-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <h2 className="text-[8rem] font-black text-white absolute top-4 left-10 opacity-100 select-none drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)] uppercase">
            JOIN US
          </h2>
          
          <div className="relative z-10 mt-12">
            <div className="inline-block bg-[#333333] text-white px-6 py-3 mb-6">
              <span className="text-2xl font-bold tracking-widest uppercase">
                SEE CAREER OPPORTUNITIES
              </span>
            </div>
            <p className="text-2xl text-[#333333] font-serif italic leading-relaxed max-w-md">
              Healthcare isn&apos;t a means to an end; it&apos;s a chance to defy limitations with creative solutions...
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#444444] py-6 px-4 text-center">
        <p className="text-white text-xl font-bold tracking-tight uppercase">
          © 2025 Ring Scale Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;