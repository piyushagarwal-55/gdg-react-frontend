const Footer = () => {
  return (
    <footer className="bg-[#1C1E53] py-10 px-4">
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        {/* Logo and Title with Divider */}
        <div className="flex items-center justify-center gap-3">
          <a href="/" className="relative flex items-center">
            <div className="w-10 h-10 bg-[#23BDEE] rounded-lg rotate-45 flex-shrink-0 z-10" />
            <span className="-ml-8 text-2xl font-bold text-white z-20">
              Skilline
            </span>
          </a>

          {/* Divider Line */}
          <div className="w-px h-6 bg-white/30 mx-2" />

          {/* Text */}
          <div className="text-left">
            <p className="text-sm text-white/60 leading-tight">
              Virtual Class <br /> for Zoom
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-medium text-sm mb-3">
            Subscribe to get our Newsletter
          </h3>
          <form className="flex justify-center items-center gap-3 flex-wrap">
            <input
              type="email"
              placeholder="Your Email"
              className="px-5 py-2.5 rounded-full text-sm bg-[#2C2F55] text-white placeholder:text-white/60 outline-none border border-white/20"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[#4A6CF7] text-white text-sm hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-sm text-white/60">
          <a href="#">Careers</a>
            <div className="w-px h-6 bg-white/30 mx-2" />

          <a href="#">Privacy Policy</a>
            <div className="w-px h-6 bg-white/30 mx-2" />

          <a href="#">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/40 mt-2">
          © 2021 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
