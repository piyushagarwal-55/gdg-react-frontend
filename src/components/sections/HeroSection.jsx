'use client';
import Button from '@/components/ui/button';
import { Play, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useAnimation.jsx';

const HeroSection = () => {
  const { ref, inView } = useScrollAnimation();
  
  useEffect(() => {
    const cards = document.querySelectorAll('.hero-card');
    const image = document.querySelector('.hero-image');

    const handleMouseMove = (e) => {
      if (!image) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = image.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      cards.forEach((card, index) => {
        const factor = (index + 1) * 2;
        card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    const container = document.querySelector('.hero-container');
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative mt-20" ref={ref}>
     <section className="h-screen bg-[#FFF2E1] dark:bg-slate-900 relative overflow-hidden hero-container font-inter flex items-center px-4 sm:px-6 lg:px-8 py-7 transition-colors duration-300">

      
       
      
<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 mt-24 sm:mt-0 relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-[30px] md:text-[38px] leading-[1.1] font-bold text-[#2F327D] dark:text-white font-inter transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="text-orange-500">Studying</span> Online is <br />
                now much easier
              </motion.h1>
              <motion.p 
                className="mt-6 text-[15px] leading-[1.75] text-black/80 dark:text-gray-300 max-w-md mx-auto lg:mx-0 font-inter transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Skilline is an interesting platform that will teach you in more an interactive way
              </motion.p>

              <motion.div 
                className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.button 
                  size="lg"
                  className="bg-orange-500 text-white rounded-full px-8 py-4 text-[15px] font-medium shadow-[0_4px_16px_rgba(244,140,6,0.3)] hover:bg-orange/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join for free
                </motion.button>
                <motion.button 
                  className="flex items-center gap-4 text-dark-navy dark:text-white font-medium group focus:outline-none transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-14 h-14 rounded-full border border-[#23BDEE] flex items-center justify-center bg-white dark:bg-slate-800 shadow-md group-hover:bg-[#23BDEE]/10 dark:group-hover:bg-[#23BDEE]/20 transition-colors">
                    <Play className="w-5 h-5 text-[#23BDEE] fill-[#23BDEE]" />
                  </div>
                  <span className="text-dark-navy dark:text-white text-sm">Watch how it works</span>
                </motion.button>
              </motion.div>
            </motion.div>


            {/* Right: Image + Cards */}
           <div className="relative w-full max-w-[350px] sm:max-w-[480px] mx-auto h-[500px] sm:h-[550px] hero-image select-none px-2 sm:px-4">

           
             <img
  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/girl.c01e367eea3b612e222d-1.webp"
  alt="Student"
  className="w-full h-full object-cover  px-0 py-0 sm:px-6 sm:py-15"
/>


              {/* Assisted Students */}
              <div className="absolute top-[25%] left-2 sm:left-[-2%] bg-white p-3 rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-3 w-max hero-card">
                <div className="w-8 h-8 bg-primary-blue/10 rounded-[8px] flex items-center justify-center">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="8" fill="#23BDEE" />
                    <g clipPath="url(#clip0_1_670)">
                      <path d="M18.125 11.25C17.5826 11.25 17.1429 11.6897 17.1429 12.2322V14.1964H19.1072V12.2322C19.1072 11.6897 18.6674 11.25 18.125 11.25Z" fill="white" />
                      <path d="M31.875 11.25C31.3325 11.25 30.8928 11.6897 30.8928 12.2322V14.1964H32.8571V12.2322C32.8571 11.6897 32.4174 11.25 31.875 11.25Z" fill="white" />
                      <path d="M35.8036 14.1964H32.8571V18.125C32.8571 18.6675 32.4174 19.1072 31.875 19.1072C31.3325 19.1072 30.8928 18.6675 30.8928 18.125V14.1964H19.1071V18.125C19.1071 18.6675 18.6674 19.1072 18.125 19.1072C17.5825 19.1072 17.1428 18.6675 17.1428 18.125V14.1964H14.1964C12.5692 14.1964 11.25 15.5156 11.25 17.1429V35.8036C11.25 37.4309 12.5692 38.75 14.1964 38.75H35.8036C37.4308 38.75 38.75 37.4309 38.75 35.8036V17.1429C38.75 15.5156 37.4308 14.1964 35.8036 14.1964ZM36.7857 35.8036C36.7857 36.346 36.346 36.7858 35.8035 36.7858H14.1964C13.654 36.7858 13.2143 36.346 13.2143 35.8036V23.0357H36.7857V35.8036Z" fill="white" />
                      <path d="M19.1071 25H17.1429C16.6004 25 16.1607 25.4397 16.1607 25.9821C16.1607 26.5246 16.6004 26.9643 17.1429 26.9643H19.1071C19.6496 26.9643 20.0893 26.5246 20.0893 25.9821C20.0893 25.4397 19.6496 25 19.1071 25Z" fill="white" />
                      <path d="M25.9821 25H24.0179C23.4754 25 23.0357 25.4397 23.0357 25.9821C23.0357 26.5246 23.4754 26.9643 24.0179 26.9643H25.9821C26.5246 26.9643 26.9643 26.5246 26.9643 25.9821C26.9643 25.4397 26.5246 25 25.9821 25Z" fill="white" />
                      <path d="M32.8572 25H30.8929C30.3505 25 29.9108 25.4397 29.9108 25.9821C29.9108 26.5246 30.3505 26.9643 30.8929 26.9643H32.8572C33.3996 26.9643 33.8394 26.5246 33.8394 25.9821C33.8394 25.4397 33.3996 25 32.8572 25Z" fill="white" />
                      <path d="M19.1071 28.9286H17.1429C16.6004 28.9286 16.1607 29.3683 16.1607 29.9107C16.1607 30.4532 16.6004 30.8929 17.1429 30.8929H19.1071C19.6496 30.8929 20.0893 30.4532 20.0893 29.9107C20.0893 29.3683 19.6496 28.9286 19.1071 28.9286Z" fill="white" />
                      <path d="M25.9821 28.9286H24.0179C23.4754 28.9286 23.0357 29.3683 23.0357 29.9107C23.0357 30.4532 23.4754 30.8929 24.0179 30.8929H25.9821C26.5246 30.8929 26.9643 30.4532 26.9643 29.9107C26.9643 29.3683 26.5246 28.9286 25.9821 28.9286Z" fill="white" />
                      <path d="M32.8572 28.9286H30.8929C30.3505 28.9286 29.9108 29.3683 29.9108 29.9107C29.9108 30.4532 30.3505 30.8929 30.8929 30.8929H32.8572C33.3996 30.8929 33.8394 30.4532 33.8394 29.9107C33.8393 29.3683 33.3996 28.9286 32.8572 28.9286Z" fill="white" />
                      <path d="M19.1071 32.8571H17.1429C16.6004 32.8571 16.1607 33.2968 16.1607 33.8393C16.1607 34.3817 16.6004 34.8214 17.1429 34.8214H19.1071C19.6496 34.8214 20.0893 34.3817 20.0893 33.8392C20.0893 33.2968 19.6496 32.8571 19.1071 32.8571Z" fill="white" />
                      <path d="M25.9821 32.8571H24.0179C23.4754 32.8571 23.0357 33.2968 23.0357 33.8393C23.0357 34.3817 23.4754 34.8214 24.0179 34.8214H25.9821C26.5246 34.8214 26.9643 34.3817 26.9643 33.8393C26.9643 33.2968 26.5246 32.8571 25.9821 32.8571Z" fill="white" />
                      <path d="M32.8572 32.8571H30.8929C30.3505 32.8571 29.9108 33.2968 29.9108 33.8393C29.9108 34.3817 30.3505 34.8214 30.8929 34.8214H32.8572C33.3996 34.8214 33.8394 34.3817 33.8394 33.8393C33.8394 33.2968 33.3996 32.8571 32.8572 32.8571Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_670">
                        <rect width="27.5" height="27.5" fill="white" transform="translate(11.25 11.25)" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div>
                  <p className="font-semibold text-[#595959] text-l">250k</p>
                  <p className="text-black/50 text-sm">Assisted Student</p>
                </div>
              </div>

            <div className="absolute sm:top-[50%] top-[45%] right-2 sm:right-[-44px] bg-white px-3 py-2 rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center gap-2 w-[240px] hero-card">

                <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center">
               <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

                <rect width="50" height="50" rx="8" fill="#F88C3D" />
                

                <g transform="translate(10, 10)">
                  <path d="M28.9285 4.28571H1.07141L15 15.7586L29.086 4.31785C29.0345 4.30278 28.9818 4.29205 28.9285 4.28571Z" fill="white"/>
                  <path d="M15.676 17.9743C15.2813 18.2975 14.7133 18.2975 14.3186 17.9743L0 6.17786V24.6428C0 25.2346 0.479694 25.7143 1.07145 25.7143H28.9285C29.5203 25.7143 30 25.2346 30 24.6428V6.33644L15.676 17.9743Z" fill="white"/>
                </g>
              </svg>


                </div>
                <div className="flex flex-col leading-tight">
                  <p className="font-semibold text-[12px] text-[#595959]">Congratulations</p>
                  <p className="text-[11px] text-black/60 -mt-1">Your admission completed</p>
                </div>
                <div className="w-5 h-5 bg-[#E1F7E3] rounded-full flex items-center justify-center ml-1">
                  <CheckCircle2 className="w-3 h-3 text-[#2ECC71]" fill="#E1F7E3" />
                </div>
              </div>

           
          <div className="absolute top-[60%] left-1 sm:left-[-10%] w-[55%] max-w-[200px] sm:w-[260px] bg-white p-3 rounded-[8px] shadow-md hero-card">

  <div className="flex items-center gap-2 sm:gap-3">
    <img
      src="/avatar.png"
      alt="User"
      width={36}
      height={36}
      className="rounded-full sm:w-12 sm:h-12"
    />
    <div>
      <p className="font-semibold text-[#595959] text-xs sm:text-sm">
        User Experience Class
      </p>
      <p className="text-black/60 text-[10px] sm:text-xs">Today at 12.00 PM</p>
    </div>
  </div>
  <Button className="w-full mt-2 sm:mt-3 bg-[#E94379] hover:bg-[#E94379]/90 text-white rounded-[24px] text-[12px] sm:text-[14px] font-bold py-2 sm:py-3 shadow-[0_4px_16px_rgba(233,67,121,0.08)]">
    Join Now
  </Button>
</div>


              <div className="absolute top-[20%] right-[40px] w-12 h-12 bg-[#F77A93] rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.10)] flex items-center justify-center hero-card">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <img src="/hero-1.png" alt="icon" className="w-8 h-8 object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 2.42499V26.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round" />
                      <path d="M2.875 6.73749L2.875 26.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round" />
                      <path d="M20.125 11.9125V26.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </section>

    
  

    </div>
  );
};

export default HeroSection;