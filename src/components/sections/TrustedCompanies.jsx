const TrustedCompanies = () => {
  return (
    <section className="bg[#fff] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-normal text-[#CFCFDE] font-inter">
            Trusted by 5,000+ Companies Worldwide
          </h2>
        </div>

    
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-10 lg:gap-14 opacity-30">
          {[
            { src: "/google.png", alt: "Google" },
            { src: "/netflix.png", alt: "Netflix" },
            { src: "/airbnb.png", alt: "Airbnb" },
            { src: "/amazon.png", alt: "Amazon" },
            { src: "/facebook.png", alt: "Facebook" },
            { src: "/grab.png", alt: "Grab" },
          ].map(({ src, alt }) => (
            <div key={alt} className="flex items-center justify-center h-12 flex-shrink-0">
              <img
                src={src}
                alt={alt}
                className="h-6 md:h-7 lg:h-8 object-contain text-[#CFCFDE]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
