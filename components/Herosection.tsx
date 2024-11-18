export default function HeroSection(){
    return(
    
        <section className="w-full text-black">
      <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
        <div className="lg:w-3/6">
          <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
            Vel quis feugiat pharetra diam.
          </h2>

          <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
            Lorem ipsum urna, consectetur adipiscing elit. Urna risus
            hendrerit dignissim duis fringilla sit. Lacus porttitor neque
            ipsum.
          </p>
        </div>
        <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
          <img src="/images/placeholder.png" alt="Hero" />
        </div>
        </div>
        </section>
    ) 
}
